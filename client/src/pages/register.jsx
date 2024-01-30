import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utility/hooks";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Stack, Alert, Typography, Grid, Link } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { REGISTER_USER } from "../utility/queries.js";


function Register() {
  const context = useContext(AuthContext);
  let navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  async function registerUserCallback() {
    await registerUser();
  }

  const { onChange, onSubmit, values } = useForm(registerUserCallback, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    type:""
  });

  const [registerUser] = useMutation(REGISTER_USER,{
    update(proxy, { data: { registerUser: userData } }) {
      context.login(userData);
      navigate("/");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
   variables: { registerInput: values },
  });

  return (
    <Container spacing={2} maxWidth="sm">
      <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: '20px'}}>Registrarse</Typography>
      <p>Regístrate a continuación para crear una cuenta.</p>
      <Stack spacing={2} paddingBottom={2}>
        <TextField label="Username" name="username" onChange={onChange} />
        <TextField label="Email" name="email" onChange={onChange} type="email"/>
        <TextField label="Password" name="password" onChange={onChange} type="password"/>
        <TextField 
          id="outlined-select-currency"
          select
          label="Tipo"
          name="type"
          onChange={onChange}>
            {["student","admin"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}

          </TextField>
        <TextField label="Confirm password" name="confirmPassword" onChange={onChange} type="password" />
      </Stack>
      {errors?.map((error)=>{
        return(
            <Alert severity="error" key={error.message}>
                {error.message}
            </Alert>
        );
      })}
       <Grid item>
                <Link style={{ textDecoration: 'none' }} href="/login" variant="body2">
                ¿Ya tienes una cuenta? Inicia sesión
                </Link>
              </Grid>
      <Button style={{ marginTop: '20px', textTransform:'none' }} variant="contained" onClick={onSubmit}>Registrarse</Button>
    </Container>
  );
}

export default Register;

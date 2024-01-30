import React, { useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useMutation, useQuery } from "@apollo/client";
import { SEND_MESSAGE, GET_MESSAGES } from "../../utility/queries.js";
import { AuthContext } from "../../context/authContext.js"


export default function ChatData({ dataState, rol, _id }) {
  const [chatMessage, setChatMessage] = useState("");
  const [createMessage] = useMutation(SEND_MESSAGE);
  const { user } = useContext(AuthContext);
  const user_id = user?.user_id;
  const email = user?.email;
  const [dataChat, setDataChat] = useState([]);
  const {  data, refetch} = useQuery(GET_MESSAGES);

  React.useEffect(() => {
  if (data && data?.getMessages) {
  setDataChat(data?.getMessages);
  }
  scrollToBottom();
  }, [data, dataChat]);

  const handleChange = (event) => {
    setChatMessage(event.target.value);
  };

  const handleChat = async () => {
    if (chatMessage.trim() !== "") {
      try {
        const { data } = await createMessage({
          variables: {
            messageInput: {
              text: chatMessage,
              createdBy: user_id,     
          }},
        });

        refetch();
        setChatMessage(" ");
        console.log("Mensaje enviado:", data.sendMessage);
      } catch (error) {
        console.error("Error al enviar el mensaje:", error.message);
      }
    } else {
      alert("Campo vació");
    }
  };

  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Grid item xs={9}>
      <Grid style={{ maxHeight: "350px", overflowY: "auto" }}>
        {dataChat?.map((c) => (
          <List key={c.date}>
            <ListItem align={c.sender?._id === _id ? "right" : "left"}>
              <ListItemText
                primary={
                  <span
                    style={{
                      textAlign: c.emailBy=== email ? "right" : "left",
                      display: "block",
                    }}
                  >
                     {c.text}
                  </span>
                }
                secondary={
                  <span
                    style={{
                      textAlign:  c.emailBy=== email ? "right" : "left",
                      display: "block",
                    }}
                  >
                    <span style={{fontWeight:"bold", textAlign:"left"}}>{c.typeUser === "admin" ? "Moderador":c.createdBy}</span>  {c.date}
                  </span>
                }
                style={{
                  background: c.typeUser === "admin" ? "#5B59FF" : "#b2dfdb",
                  borderRadius: "10px",
                  padding: "8px",
                }}
              />
            </ListItem>
          </List>
        ))}
        <div ref={messagesEndRef} />
      </Grid>
      <Divider />

      <Grid container style={{ padding: "20px", display: "flex" }}>
        <Grid item xs={10}>
          <TextField
            id="outlined-basic"
            label="Envía tu mensaje"
            fullWidth
            value={chatMessage}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={2} align="right">
          <Button onClick={handleChat}>
            <Fab color="primary" aria-label="add">
              <SendIcon />
            </Fab>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

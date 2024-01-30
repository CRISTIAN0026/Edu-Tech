import React from "react";
import ChatData from "./ChatData";
import { Box, Paper, Typography } from '@mui/material'

const Chat = ({ data, rol, userId, _id }) => {
  const [dataChat, setDataChat] = React.useState([]);


  return (
    <Box  sx={{
      display: 'flex', justifyContent:"end", flexDirection:"column"
    }}>
      <Typography variant="h3" style={{ fontWeight:"bold" }}>Chat</Typography>
      <Paper elevation={3}  style={{background:"#f5fcff" }}>
        <ChatData _id={_id} rol={rol} userId={userId} dataState={data} dataChat={dataChat} setDataChat={setDataChat} />
      </Paper>
    </Box>
  );
};

export default Chat;

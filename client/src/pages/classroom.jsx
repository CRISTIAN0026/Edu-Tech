import React from "react";
import { Paper } from "@mui/material";
import VideoComponent from "../components/video/VideoComponent";
import Chat from "../components/Chats/Chat";
import "./classroom.css";

function Classroom(){
    return(
        <Paper elevation={3} className="PaperContainer">
            <VideoComponent/>
            <Chat/>
        </Paper>
    )
}

export default Classroom;
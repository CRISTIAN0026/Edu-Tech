import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Landing from "./landing";
import Classroom from "./classroom";

function Home() {
  const { user } = useContext(AuthContext);
  return <>{user ? <Classroom /> : <Landing />}</>;
}

export default Home;

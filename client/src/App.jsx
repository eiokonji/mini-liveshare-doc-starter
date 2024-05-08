import { useEffect, useState } from "react";
import { socket } from "./socket";
import "./App.css";
import { TextArea } from "./components";

function App() {
  return (
    <>
      <h1>Mini Live Share Doc</h1>
      <TextArea />
    </>
  );
}

export default App;

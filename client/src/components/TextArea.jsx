import { useEffect, useState } from "react";
import { socket } from "../socket";

export default function TextArea() {
  // require state
  const [input, setInput] = useState("");

  useEffect(() => {
    const onDocChange = (value) => {
      setInput(value);
      socket.emit("inputChange", value);
    };

    socket.on("docChange", onDocChange);

    return () => {
      socket.on("docChange", onDocChange);
    };
  }, []);

  return (
    <textarea
      rows={100}
      cols={100}
      value={input}
      onChange={(e) => {
        setInput(e.target.value);

        socket.emit("inputChange", e.target.value);
      }}
    />
  );
}

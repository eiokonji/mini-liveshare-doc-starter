import { useEffect, useState } from "react";
import { socket } from "../socket";

export default function TextArea() {
  return <textarea rows={100} cols={100} />;
}

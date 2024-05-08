const { Server: ioServer } = require("socket.io");
const io = new ioServer({
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {});

io.listen(8000);

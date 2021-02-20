const express = require("express");
const path = require("path");
const SocketIO = require("socket.io");
const http = require("http");

//initialization
const app = express();
const server = http.createServer(app);
const io = SocketIO(server);

//Settings
app.set("port", process.env.PORT || 3000);

//middlewares

//sockets
require("./sockets")(io);

//static files
app.use(express.static(path.join(__dirname, "public")));

//Starting the server
server.listen(app.get("port"), () => {
  console.log(`Server on PORT:${app.get("port")}`);
});

module.exports = (io) => {
  var line_history = [];
  io.on("connection", (socket) => {
    console.log("New user connected");

    //socket.emit()
    for (let i in line_history) {
      socket.emit("draw_line", { line: line_history[i] });
    }

    socket.on("draw_line", (data) => {
      line_history.push(data.line);
      io.emit("draw_line", { line: data.line });
    });
  });
};

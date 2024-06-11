// establishes a connection with the game server

const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541// PORT number here,
  });
   

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // prompting when connection is established
  conn.on("connect", () => {
    console.log("Connection successfully established");
    conn.write("Name: MAS");
    
  });

  //Recieving data from server
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  return conn;
};


module.exports = connect;
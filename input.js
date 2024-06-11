//an input module which will focus on managing the user input.
//Moving HandleUserInput and input setup functions to this module

// setup interface to handle user input from stdin
//the stdin object returned by setupInput will allow us to listen for keyboard input and react to it

//// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;

  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  const stdin = process.stdin;  
  
  // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setRawMode(true); 
  
  // utf8 encoding is set so that we can read the text data that is input
  stdin.setEncoding("utf8"); 
  
  // resume stdin so the program can listen for input
  stdin.resume(); 
  
 //what happens when "data" is received from stdin..
  stdin.on("data",  handleUserInput);
  
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};


//handleUserInpyt--specifies what happens when a particular key is pressed on the keyboard input
const handleUserInput = function (key)  {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    console.log("Move : Up")
    connection.write("Move : up");
  }
  if (key === "a") {
    connection.write("Move : left");
    console.log("Move : left")
  }
  if (key === "s") {
    connection.write("Move : down");
    console.log("Move : down");
  }
  if (key === "d") {
    connection.write("Move : right");
    console.log("Move : down");
  }
  if (key === "m") {
    connection.write("Say: I am here");
    console.log()
  }
};

module.exports=setupInput;
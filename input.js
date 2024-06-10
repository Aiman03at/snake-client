//an input module which will focus on managing the user input.
//Moving HandleUserInput and input setup functions to this module

// setup interface to handle user input from stdin
//the stdin object returned by setupInput will allow us to listen for keyboard input and react to it
const setupInput = function () {
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", (key) => handleUserInput(key));//what happens when "data" is received from stdin..
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};
//handleUserInpyt--specifies what happens when a particular key is pressed on the keyboard input
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
};

module.exports=setupInput;
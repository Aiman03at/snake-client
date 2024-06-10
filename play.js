/////a function called connect which sets up a connection and returns an object.
const connect= require("./client")
const setupInput = require("./input")

console.log("Connecting ...");
connect();
setupInput();
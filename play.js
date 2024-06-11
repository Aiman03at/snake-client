/////a function called connect which sets up a connection and returns an object.
//1.connect() returns an object that can be used to interact with the server
//2.the object returned by connect() should be passed into setupInput()
//3.setupInput() places a reference to that object in another variable connection which is in a global scope of that module




/**console.log("Connecting ...");
connect();*/
const connect = require("./client");
const  setupInput = require("./input");



const conn=connect();
setupInput(conn); 

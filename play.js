const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

// call setupInput and pass the conn object returned by connect() to it  
setupInput(connect());

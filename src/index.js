// This is the main entry point of the application. It exports a function that can be used in other parts of the application.
// This is a simple function that takes a name as an argument and returns a greeting message.
function sayHi(name) {
  return `Hello ${name}`
}

module.exports = sayHi

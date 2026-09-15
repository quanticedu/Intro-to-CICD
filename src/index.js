// Here is the code for the index.js file in the src directory
function sayHi(name) {
  return `Hello ${name}`
}

module.exports = sayHi
//adding a new function to say goodbye
function sayGoodbye(name) {
  return `Goodbye ${name}`
}

module.exports.sayGoodbye = sayGoodbye
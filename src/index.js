function sayHi(name) {
  return `Hello there ${name}`
}

module.exports = sayHi

// addComment.js
const fs = require('fs');

// Get file path and comment from command line
const [,, filePath, comment] = process.argv;

if (!filePath || !comment) {
  console.log("Usage: node addComment.js <file.js> \"Your comment\"");
  process.exit(1);
}

// Read the file
const content = fs.readFileSync(filePath, 'utf8');

// Prepend the comment
const newContent = `// ${comment}\n${content}`;

// Write back to the file
fs.writeFileSync(filePath, newContent, 'utf8');

console.log(`Comment added to ${filePath}`);


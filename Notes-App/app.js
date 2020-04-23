const fs = require('fs');

fs.writeFileSync('notes.txt', 'My Name is Mayank Khanna.');
fs.appendFileSync('notes.txt', ' I am learning Node.js.');
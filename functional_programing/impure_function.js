let count = 0;
function increment() {
    count++;
}

function getCurrentTime() {
    return new Date().toLocaleDateString();
}

function updateUser(user) {
    user.name = "update name";
}

const fs = require('fs');

function writeToFile(data) {
    fs.writeFileSync('data.txt', data);
}
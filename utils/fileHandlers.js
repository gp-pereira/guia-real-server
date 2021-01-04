const { readFileSync, unlinkSync } = require('fs');

function retrieveFileAsBuffer (filename) {
    return Buffer.from(readFileSync(filename)).toString('base64');
}

function deleteFile (filename) {
    unlinkSync(filename);
}

module.exports = { retrieveFileAsBuffer, deleteFile };
import fs from 'fs';

const buffer = fs.readFileSync('file-system.mjs');

console.info(buffer.toString());

fs.writeFileSync("file-system-copy.txt", "Contoh file system hello world");
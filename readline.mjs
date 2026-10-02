import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Masukkan nama Anda: ", (nama) => {
    console.info(`Halo, ${nama}! Selamat datang di Node.js.`);
    input.close();
});

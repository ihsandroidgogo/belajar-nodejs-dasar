import process from "process";

process.addListener("exit", (exitCode) => {
    console.info(`Proses akan keluar dengan kode: ${exitCode}`);
});

console.info(process.version);
console.table(process.report);
console.table(process.env);

process.exit(1);

console.info("Ini tidak akan dieksekusi karena proses sudah keluar");
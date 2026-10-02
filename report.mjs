import process from 'process';

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = 'report.json';

function contohError() {
    throw new Error('Contoh error untuk testing report');
}

contohError();
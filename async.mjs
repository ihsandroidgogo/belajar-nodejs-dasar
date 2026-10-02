function samplePromise() {
    return Promise.resolve("Hello World");
}

const data = await samplePromise();
console.info(data);
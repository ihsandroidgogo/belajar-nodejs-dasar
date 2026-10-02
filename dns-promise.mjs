import dns from "dns/promises";

const lookup = await dns.lookup("www.google.com");
console.info(lookup.family);
console.info(lookup.address);
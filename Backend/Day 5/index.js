var fs = require("fs");

fs.mkdirSync("day_1");

fs.writeFileSync("day_1/helloAnsh.txt", "Hello Ansh!");

console.log(fs.readFileSync("day_1/helloAnsh.txt", "utf-8"));

fs.unlinkSync("day_1/helloAnsh.txt");

fs.rmdirSync("day_1");

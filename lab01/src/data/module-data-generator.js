const fs = require("node:fs/promises");

const nameFile = "names.txt";

const eyeColors = ["blue", "green", "gray", "brown"];

(async () => {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.error("Not enought arguments");
        process.exit(1);
    }

    const count = parseInt(args[0]);
    const contents = await fs.readFile(nameFile, { encoding: "utf-8" });

    const names = contents.split("\n").map((s) => s.trim()).filter((s) => s.length !== 0);

    let result = "export const data = [\n";
    for (let i = 0; i < count; i++) {
        const nameIdx = Math.round(Math.random() * (names.length - 1));
        const person = {
            id: i + 1,
            name: names[nameIdx],
            eyes: eyeColors[Math.round(Math.random() * (eyeColors.length - 1))],
            rating: Math.round(Math.random() * 10),
        };
        result += `${JSON.stringify(person, undefined, 2)},\n`;
    }

    result += "];";
    
    await fs.writeFile("src/module-data.js", result);
})()
#!/usr/bin/env node
// Usage: node erd_to_mermaid_link.js [path/to/ERD.md]
// Default input: ERD.md in current directory

const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const { exec } = require("child_process");

const file = path.join(__dirname, '../ERD.md');
if (!fs.existsSync(file)) {
  console.log('Please generate the ERD with `prisma:client:generate` and then run this script!')
  process.exit(1)
}

const content = fs.readFileSync(file, "utf8");

// Extract the mermaid block
const match = content.match(/```mermaid\s*([\s\S]*?)```/);
if (!match) {
  console.error("No mermaid code block found in", inputFile);
  process.exit(1);
}

const diagram = match[1].trim();

// Encode as mermaid.live expects: base64url of JSON { code, mermaid: { theme } }
const payload = JSON.stringify({
  code: diagram,
  mermaid: { theme: "default" },
});

const compressed = zlib.deflateSync(Buffer.from(payload), { level: 9 });
const encoded = compressed.toString("base64url");
const url = `https://mermaid.live/edit#pako:${encoded}`;

console.log(url);

const openCommand =
  process.platform === "win32"
    ? `start "" "${url}"`
    : process.platform === "darwin"
    ? `open "${url}"`
    : `xdg-open "${url}"`;

exec(openCommand, (error) => {
  if (error) {
    console.warn("Could not open the link automatically. Please open it manually");
  }
});

#!/usr/bin/env node
// Usage: node erd_to_mermaid_link.js [path/to/ERD.md]
// Default input: ERD.md in current directory

const fs = require("fs");
const path = require("path");

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

const encoded = Buffer.from(payload).toString("base64url");
const url = `https://mermaid.live/edit#base64:${encodeURI(encoded)}`;

console.log(url);

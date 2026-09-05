const fs = require('fs');
const svg = fs.readFileSync('public/trck-logo.svg', 'utf8');
const m = svg.match(/data:image\/png;base64,([^"]+)/);
if (m) {
  fs.writeFileSync('public/extracted_svg_logo.png', Buffer.from(m[1], 'base64'));
}

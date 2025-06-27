const fs = require('fs');
const path = require('path');

const huskyPath = path.join(__dirname, '.husky', 'commit-msg');

if (!fs.existsSync(huskyPath)) {
  console.warn(
    '\x1b[33m%s\x1b[0m',
    '[husky] Husky hooks are not installed.\nPlease run: npm run prepare',
  );
  process.exit(1);
}

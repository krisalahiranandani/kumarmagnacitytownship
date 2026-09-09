const fs = require("fs");
const path = require("path");

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync("dist/client")) {
  const entries = fs.readdirSync("dist/client");
  for (const item of entries) {
    const srcPath = path.join("dist/client", item);
    const destPath = path.join("dist", item);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
  copyDir("dist/client", "out");
  console.log("✓ Successfully synced dist/client to dist root and out/ fallback for universal Cloudflare compatibility.");
}

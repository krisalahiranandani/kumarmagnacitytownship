const fs = require("fs");
const path = require("path");

function copyDir(src, dest, ignoreDirs = []) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    if (ignoreDirs.includes(entry.name)) continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath, ignoreDirs);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync("dist/client")) {
  copyDir("dist/client", "dist", ["client", "server"]);
  copyDir("dist/client", "out");
} else if (fs.existsSync("dist")) {
  copyDir("dist", "dist/client", ["client", "server", "out"]);
  copyDir("dist", "out", ["client", "server", "out"]);
}

// Ensure key files exist in root, dist, and out
const keyFiles = ["_headers", "_redirects", "_routes.json", "wrangler.json"];
for (const file of keyFiles) {
  const publicPath = path.join("public", file);
  const rootPath = file;
  const srcFile = fs.existsSync(publicPath) ? publicPath : (fs.existsSync(rootPath) ? rootPath : null);
  if (srcFile) {
    if (fs.existsSync("dist")) fs.copyFileSync(srcFile, path.join("dist", file));
    if (fs.existsSync("dist/client")) fs.copyFileSync(srcFile, path.join("dist/client", file));
    if (fs.existsSync("out")) fs.copyFileSync(srcFile, path.join("out", file));
  }
}

console.log("✓ Successfully synced universal Cloudflare Pages dist, dist/client, and out/ directories.");


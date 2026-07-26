const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, fileList);
    } else {
      if (filePath.endsWith('page.tsx') || filePath.endsWith('error.tsx') || filePath.endsWith('not-found.tsx')) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

const allFiles = walk('/Users/vikasyewle/Desktop/kumarmagnacity/app');
let updatedFilesCount = 0;

allFiles.forEach(file => {
  if (file.includes('/admin/')) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Specific replacements requested
  content = content.replace(/bg-dark\/5\b/g, 'bg-primary/5');
  content = content.replace(/bg-dark\/10\b/g, 'bg-primary/10');
  content = content.replace(/bg-dark\/20\b/g, 'bg-primary/5');
  content = content.replace(/bg-dark\/50\b/g, 'bg-primary/5');
  content = content.replace(/bg-dark\/95\b/g, 'bg-light/95');

  // Hardcoded colors replacements
  content = content.replace(/bg-\[#0A0A0A\]/g, 'bg-light');
  content = content.replace(/bg-\[#050505\]/g, 'bg-light');
  content = content.replace(/bg-\[#040404\]/g, 'bg-light');
  content = content.replace(/bg-\[#030303\]/g, 'bg-light');
  content = content.replace(/bg-\[#020202\]/g, 'bg-light');
  content = content.replace(/bg-\[#151515\]/g, 'bg-light');
  content = content.replace(/bg-\[#1A1A1A\]/g, 'bg-light');
  content = content.replace(/bg-\[#111\]/g, 'bg-light');
  content = content.replace(/bg-\[#111111\]/g, 'bg-light');

  // Error and Not Found updates (entire file can be updated safely)
  if (file.endsWith('error.tsx') || file.endsWith('not-found.tsx')) {
    content = content.replace(/bg-dark/g, 'bg-warm-bg');
    content = content.replace(/bg-dark-muted\/50/g, 'bg-light/50');
    content = content.replace(/text-white/g, 'text-primary');
    content = content.replace(/text-white\/40/g, 'text-primary/40');
    content = content.replace(/text-white\/60/g, 'text-primary/60');
    content = content.replace(/text-white\/20/g, 'text-primary/20');
    content = content.replace(/border-white\/10/g, 'border-primary/10');
    content = content.replace(/bg-white\/5/g, 'bg-primary/5');
    content = content.replace(/bg-white\/10/g, 'bg-primary/10');
  } else {
    // For normal pages, we need to be very careful.
    // We only replace bg-dark and text-white if they are in a <section> that is not a hero section.
    
    // Regex for className in <section ... className="...">
    // Let's manually parse <section ... > blocks.
    const sectionRegex = /<section[^>]*className=["'][^"']*["'][^>]*>/g;
    let match;
    let newContent = "";
    let lastIndex = 0;
    
    while ((match = sectionRegex.exec(content)) !== null) {
      newContent += content.slice(lastIndex, match.index);
      
      let sectionTag = match[0];
      // Check if this section is likely a hero
      const isHero = sectionTag.includes('h-screen') || sectionTag.includes('min-h-[70vh]') || sectionTag.includes('hero');
      
      if (!isHero) {
        sectionTag = sectionTag.replace(/bg-dark(?![/-])/g, 'bg-warm-bg');
        if (sectionTag.includes('bg-warm-bg') || sectionTag.includes('bg-light')) {
          sectionTag = sectionTag.replace(/text-white(?![/-])/g, 'text-primary');
        }
      }
      
      newContent += sectionTag;
      lastIndex = sectionRegex.lastIndex;
    }
    newContent += content.slice(lastIndex);
    content = newContent;
    
    // Now for internal divs of those sections, since our regex only updated the <section> tag itself.
    // Instead of doing it tag by tag, we can split by "<section", then check.
    const sections = content.split('<section');
    for (let i = 1; i < sections.length; i++) {
        const isHero = sections[i].includes('h-screen') || sections[i].includes('min-h-[70vh]') || sections[i].includes('hero');
        if (!isHero) {
            sections[i] = sections[i].replace(/bg-dark(?![/-])/g, 'bg-warm-bg');
            if (sections[i].includes('bg-warm-bg') || sections[i].includes('bg-light')) {
                sections[i] = sections[i].replace(/text-white(?![/-])/g, 'text-primary');
                sections[i] = sections[i].replace(/text-white\/60/g, 'text-primary/60');
                sections[i] = sections[i].replace(/text-white\/50/g, 'text-primary/50');
                sections[i] = sections[i].replace(/text-white\/40/g, 'text-primary/40');
                sections[i] = sections[i].replace(/border-white\/10/g, 'border-primary/10');
                sections[i] = sections[i].replace(/bg-white\/5/g, 'bg-primary/5');
            }
        }
    }
    content = sections.join('<section');
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedFilesCount++;
    console.log(`Updated ${file}`);
  }
});
console.log(`Updated ${updatedFilesCount} files total.`);

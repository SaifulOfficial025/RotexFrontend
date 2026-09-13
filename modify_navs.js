const fs = require('fs');

// 1. Modify DynamicHeader.js
let dhPath = 'app/components/dymanicHeader.js';
let dhContent = fs.readFileSync(dhPath, 'utf8');

// Regex to remove the search button block
const searchRegex = /\s*\{\/\*\s*Search Icon\s*\*\/\}\s*<button[\s\S]*?<IoSearchOutline[\s\S]*?<\/button>/;
dhContent = dhContent.replace(searchRegex, '');

// Clean up unused import
dhContent = dhContent.replace('IoSearchOutline,', '');

fs.writeFileSync(dhPath, dhContent);

// 2. Modify SliderNavBar.js
let snbPath = 'app/(homePage)/slider/SliderNavBar.js';
let snbContent = fs.readFileSync(snbPath, 'utf8');

// The line is: <div className="flex lg:hidden w-full">
// We just change it to hidden.
snbContent = snbContent.replace(
  '<div className="flex lg:hidden w-full">',
  '<div className="hidden">'
);

fs.writeFileSync(snbPath, snbContent);

console.log('Modifications applied successfully.');

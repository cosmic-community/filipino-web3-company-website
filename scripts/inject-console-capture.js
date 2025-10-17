const fs = require('fs');
const path = require('path');

const buildDir = path.join(process.cwd(), '.next', 'static');
const scriptPath = path.join(process.cwd(), 'public', 'dashboard-console-capture.js');

function injectScript(htmlPath) {
  if (!fs.existsSync(htmlPath)) return;
  
  let html = fs.readFileSync(htmlPath, 'utf8');
  const script = fs.readFileSync(scriptPath, 'utf8');
  
  if (html.includes('dashboard-console-capture')) return;
  
  const scriptTag = `<script>${script}</script>`;
  
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${scriptTag}</head>`);
  } else if (html.includes('<body')) {
    html = html.replace('<body', `<body>${scriptTag}`);
  }
  
  fs.writeFileSync(htmlPath, html);
}

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

processDirectory(buildDir);
console.log('Console capture script injected successfully');
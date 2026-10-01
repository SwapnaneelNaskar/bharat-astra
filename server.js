/**
 * BharatCart Next-Gen Development Server
 * Zero-dependency Node.js HTTP server for `npm run dev`
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const DEFAULT_PORT = process.env.PORT || 3000;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff2': 'font/woff2'
};

function startServer(port) {
    const server = http.createServer((req, res) => {
        let reqUrl = req.url.split('?')[0];
        if (reqUrl === '/' || reqUrl === '') {
            reqUrl = '/index.html';
        }

        const filePath = path.join(__dirname, reqUrl);
        const ext = path.extname(filePath).toLowerCase();

        fs.readFile(filePath, (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    // Fallback to index.html for Single Page Routing
                    const fallbackPath = path.join(__dirname, 'index.html');
                    fs.readFile(fallbackPath, (spaErr, spaData) => {
                        if (spaErr) {
                            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                            res.end('404 Not Found');
                        } else {
                            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                            res.end(spaData);
                        }
                    });
                } else {
                    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                    res.end('500 Internal Server Error: ' + err.message);
                }
                return;
            }

            res.writeHead(200, {
                'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
                'Cache-Control': 'no-cache, no-store, must-revalidate'
            });
            res.end(data);
        });
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`⚠️  Port ${port} in use, trying port ${port + 1}...`);
            startServer(port + 1);
        } else {
            console.error('Server error:', err);
        }
    });

    server.listen(port, () => {
        const url = `http://localhost:${port}`;
        console.log('');
        console.log('  \x1b[36m=================================================================\x1b[0m');
        console.log('  \x1b[1m\x1b[33m⚡ BHARATCART NEXT-GEN E-COMMERCE & SERVICE ECOSYSTEM\x1b[0m');
        console.log('  \x1b[36m=================================================================\x1b[0m');
        console.log(`  \x1b[32m➜  Local URL:\x1b[0m   \x1b[1m\x1b[4m${url}\x1b[0m`);
        console.log(`  \x1b[35m➜  Customer:\x1b[0m    Swapnaneel Naskar (Registered Profile)`);
        console.log(`  \x1b[34m➜  Catalog:\x1b[0m     20,480 SKUs across 9 Categories`);
        console.log(`  \x1b[35m➜  FitVerse:\x1b[0m    Studio with Selective Shirts, Pants, Suits & Dresses`);
        console.log(`  \x1b[33m➜  GST Engine:\x1b[0m  18% Tax Calculation (CGST 9% + SGST 9%) & Invoicing`);
        console.log('  \x1b[36m=================================================================\x1b[0m');
        console.log('  \x1b[90mPress Ctrl+C in this terminal to stop the server.\x1b[0m\n');

        // Automatically launch browser on Windows
        const cmd = process.platform === 'win32' ? `start ${url}` : process.platform === 'darwin' ? `open ${url}` : `xdg-open ${url}`;
        exec(cmd, () => {});
    });
}

startServer(DEFAULT_PORT);

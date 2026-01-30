import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files with proper caching headers
app.use('/assets', express.static(path.join(__dirname, 'public/assets'), {
    maxAge: '1y', // Cache for 1 year
    immutable: true, // Assets with hash in filename are immutable
}));

// Serve other static files with shorter cache
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1d', // Cache for 1 day
    setHeaders: (res, filePath) => {
        // Set specific cache headers for images
        if (filePath.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
    },
}));

// Serve index.html for all other routes (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Frontend server running on port ${PORT}`);
});

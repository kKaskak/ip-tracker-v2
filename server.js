import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;

// Serve the image and log the request
app.get('/image', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`Image requested by IP: ${ip}`);

    // Log the data to a file or database
    fs.appendFileSync('access.log', `Access from ${ip} at ${new Date().toISOString()}\n`);

    // Send the image
    res.sendFile('./white-image.png', { root: __dirname });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

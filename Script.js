```
// Get the image element
const img = document.getElementById('image');

// Create a canvas element
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions to match the image
canvas.width = img.width;
canvas.height = img.height;

// Draw the image on the canvas
ctx.drawImage(img, 0, 0);

// Get the pixel data from the canvas
const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

// Define a function to detect colors
function detectColors(pixels) {
    const colors = [];

    // Loop through each pixel
    for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        // Convert RGB to HEX
        const hexColor = rgbToHex(r, g, b);

        // Add the color to the array
        colors.push(hexColor);
    }

    return colors;
}

// Define a function to convert RGB to HEX
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// Detect colors
const colors = detectColors(pixels);

// Log the detected colors
console.log(colors);
```

const fs = require('fs');
const { execSync } = require('child_process');

try {
    execSync('npm install ttf2woff2', { stdio: 'inherit' });
    const ttf2woff2 = require('ttf2woff2');

    const fontsDir = './fonts';
    const files = fs.readdirSync(fontsDir).filter(f => f.endsWith('.ttf'));

    files.forEach(f => {
        const inputPath = `${fontsDir}/${f}`;
        const outputPath = `${fontsDir}/${f.replace('.ttf', '.woff2')}`;
        const input = fs.readFileSync(inputPath);
        fs.writeFileSync(outputPath, ttf2woff2(input));
        console.log(`Converted ${f} to WOFF2`);
    });
} catch (e) {
    console.error(e);
}

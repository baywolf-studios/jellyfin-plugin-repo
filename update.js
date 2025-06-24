const fs = require('fs/promises'); 
const userAgent = "Jellyfin-Server/10.10.7"; // Required for some repositories

async function getSources(){
    let sources = [];
    try {
        const fileContent = await fs.readFile('sources.txt', 'utf8'); 
        sources = fileContent.split(/\r?\n/).filter(line => line.trim() !== ''); 
    } catch (err) {
        console.error("Error reading sources.txt:", err);
        return []; 
    }

    let mergedData = []; 

    for(const url of sources){
        try {
            console.log(`Fetching ${url}...`);
            const response = await fetch(url, {
                headers: { 'User-Agent': userAgent }
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            mergedData.push(...json);
            console.log(`    -> Merged ${json.length} plugins.`);

        } catch (error) {
            console.error(`Error processing ${url}: ${error.message}`);
        }
    }

    return mergedData; 
}

async function writeManifest(dataToWrite){
    if (!dataToWrite || dataToWrite.length === 0) {
        console.log("No data to write to manifest. Aborting.");
        return;
    }
    try {
        const manifestJson = JSON.stringify(dataToWrite, null, 2);
        await fs.writeFile('manifest.json', manifestJson);
    } catch (err) {
        console.error('Error writing manifest file:', err);
    }
    console.log(`\nSuccessfully created manifest.json with ${dataToWrite.length} total plugins`);
}

async function main() {
    await writeManifest(await getSources());
}

main();

const perks = []
const perkImages = []
const perkImagesNew = []

fetch('https://raw.githubusercontent.com/LouisArCo/DBD-Perk-Randomizer/main/Killer%20Perks.html')
.then(response => response.text())
.then(data => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(data, 'text/html');

    const table = htmlDocument.querySelector('table');
    const rows = table.querySelectorAll('tr')

    rows.forEach(row => {
        const cells = row.querySelectorAll('th');
        const title = cells[1].textContent; 
        perks.push(title);

        const anchor = row.querySelector('a');
        if (anchor && anchor.hasAttribute('href')) {
        const image = anchor.href;
        perkImages.push(image.toString());
    }
    });
    perks.splice(0, 1)
})
.then(data => {
    console.log(perks)
    
    perkImages.forEach(url => {
        const parts = url.split(`/revision`);
        const modifiedUrl = parts[0];
        perkImagesNew.push(modifiedUrl);
    });
    
    console.log(perkImagesNew)
})
.catch(error => console.log('Error:', error));



function randomizePerks() {
    let randomIndex1 = Math.floor(Math.random() * perks.length);
    let randomElement1 = perks[randomIndex1]
    document.getElementById('perk1img').src = perkImagesNew[randomIndex1];
    document.getElementById('perk1').innerHTML = randomElement1

    do { 
        randomIndex2 = Math.floor(Math.random() * perks.length);
        randomElement2 = perks[randomIndex2];
    } while (randomElement2 === randomElement1)
    document.getElementById('perk2img').src = perkImagesNew[randomIndex2];
    document.getElementById('perk2').innerHTML = randomElement2;

    do { 
        randomIndex3 = Math.floor(Math.random() * perks.length);
        randomElement3 = perks[randomIndex3];
    } while (randomElement3 === randomElement1 ||
            randomElement3 === randomElement2)
    document.getElementById('perk3img').src = perkImagesNew[randomIndex3];
    document.getElementById('perk3').innerHTML = randomElement3;

    do { 
        randomIndex4 = Math.floor(Math.random() * perks.length);
        randomElement4 = perks[randomIndex4];
    } while (randomElement4 === randomElement1 ||
        randomElement4 === randomElement2 ||
        randomElement4 === randomElement3)
    document.getElementById('perk4img').src = perkImagesNew[randomIndex4];
    document.getElementById('perk4').innerHTML = randomElement4;
}
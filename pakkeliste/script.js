const lists = {
    "basic-list": [
        "Telefonlader",
        "Toalettsaker",
        "Undertøy",
        "Sokker",
        "Pysjamas",
        "Ørepropper,headsett",
        "Fritidsklær",
        "Hårbørste og hårstrikk",
        "Barberhøvel",
        "Shampo og balsam"

    ],
    "important-list": [
        "Pass, ID",
        "Reiseforsikring",
        "Medisiner/vitaminer",
        "Solkrem og aftersun",
        "Lommebok og kort",
        "Tannbørsre og tannkrem"
    
    ],

    "workout-list": [
        "Handballklær",
        "Innesko",
        "Løpesko",
        "Løpeklær",
        "Handball",
        "Sportsbh",
        "Treningssokker",
        "Treningsklokke",
        "Liten treningsbag"
    ],

    "beach-list": [
        "Badehandkle",
        "Bikini/badedrakt",
        "Caps/solhatt",
        "Liten totebag",
        "Solbriller",
        "Flip-flops"
    ],

    "random-list": [
        "Leppomade",
        "Snacks",
        "Kortstokk",
        "Pose til skittentøy",
        "Spicy bok"
    ],
};

function renderList(ulId,items) {
    const ul = document.getElementById(ulId);
    items.forEach((text, index)=> {
        const id = `${ulId}-${index}`;

        const li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" id="${id}">
        <label for="${id}">${text}</label>`;
        ul.appendChild(li);
    });
}

for (const [ulId,items] of Object.entries(lists)) {
    renderList(ulId,items);
}


console.log("Page loaded!");

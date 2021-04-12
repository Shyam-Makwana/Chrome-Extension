let bgpage = chrome.extension.getBackgroundPage();
let wordGot = bgpage.word;
let link = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordGot}`;

async function getMeaning(url) {
    const response = await fetch(url);
	let data = await response.json();
    data = data[0].meanings;
    data = data[0].definitions;
    data = data[0].definition;
    document.getElementById('word').innerHTML = `Definition of ${wordGot}`;
    document.getElementById('meaning').innerHTML = data;
}

getMeaning(link);

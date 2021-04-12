window.addEventListener('mouseup', wordSelected);

function wordSelected(){
    let selectedWord = window.getSelection().toString().trim();
    if(selectedWord.length > 0){
        // console.log(`Word Selected = ${selectedWord}`);
        let message = {
            text: selectedWord
        }
        chrome.runtime.sendMessage(message);
    }
}
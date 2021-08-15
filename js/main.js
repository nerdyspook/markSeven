var translate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// let serverUrl = "https://api.funtranslations.com/translate/doge.json"
var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationUrl(text) {
    return serverUrl + "?text=" + text
};

function errorHandler(error) {
    alert("Something is wrong: " + error + " Try after 1-2 hours!")
};

function clickHandler() {
    var input = txtInput.value;

    fetch(getTranslationUrl(input))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            })
        .catch(errorHandler)
};

btn-translate.addEventListener("click", clickHandler)
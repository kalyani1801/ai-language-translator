async function translateText() {

    const text =
        document.getElementById("inputText").value;

    const source =
        document.getElementById("sourceLang").value;

    const target =
        document.getElementById("targetLang").value;

    const output =
        document.getElementById("outputText");

    if(text.trim() === ""){
        output.value = "Please enter text.";
        return;
    }

    output.value = "⏳ Translating...";

    try {

        const url =
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`;

        const response = await fetch(url);

        const data = await response.json();

        output.value =
            data.responseData.translatedText;

    }
    catch(error){

        console.error(error);

        output.value =
            "Translation service unavailable.";
    }
}

function swapLanguages() {

    const source =
        document.getElementById("sourceLang");

    const target =
        document.getElementById("targetLang");

    let temp = source.value;

    source.value = target.value;

    target.value = temp;
}

function copyTranslation(){

    const text =
        document.getElementById("outputText");

    navigator.clipboard.writeText(text.value);

    alert("Translation copied successfully!");
}


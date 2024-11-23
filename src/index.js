function displayQuote(response) {
    new Typewriter("#quote", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generateQuote(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "b1cfab0b1fb7aobbt7a63cdaa3c47406";
    let context = "You are a wise quote expert who has the creativity and and ability to create impactful and memorable phrases that convey wisdom, inspiration, humour and other emotions in a concise manner. Please generate a short quote and make sure this quote is about the topic provided by the user instructions. Sign the quote using SheCodes AI as a <strong> element at the bottom";
    let prompt = `User instructions: Generate a quote about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating quote...");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context : ${context}`);



    axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);


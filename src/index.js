function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let ingredientInput = document.querySelector("#Ingredients");
  let apiKey = "107f301285cb6tcc0f0b30ab311aao4a";
  let prompt = `User instructions: Generate an easy Japanese Recipe with ${ingredientInput.value}`;
  let context =
    "You are a highly skilled chef that has worked in Japan and want to share easy recipes with the ingredients given by the user instructions, provide the answer in basic HTML, Sign the recipe at the end with Itadakimasu inside a strong element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">🍴Generating your Japanese Recipe!</div`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeForm = document.querySelector("#recipe-generator");
recipeForm.addEventListener("submit", generateRecipe);

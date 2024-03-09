function displayRecipe(response) {
  console.log("recipe Generated");
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
    "You are a highly skilled chef that has worked in Japan and want to share easy recipes with the ingredients given by the user instructions, provide the answer in basic HTML";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating recipe");

  axios.get(apiUrl).then(displayRecipe);
}

let recipeForm = document.querySelector("#recipe-generator");
recipeForm.addEventListener("submit", generateRecipe);

function generateRecipe(event) {
  event.preventDefault();
  new Typewriter("#recipe", {
    strings: "Generating Recipe",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let recipeForm = document.querySelector("#recipe-generator");
recipeForm.addEventListener("submit", generateRecipe);

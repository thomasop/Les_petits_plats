// Check main input
function checkMainInputWithTag() {
  const mainInput = document.forms[0][0];
  if (mainInput.value.length > 2) {
    var getRecipe = initialArrayOfData.filter((recipe) => {
      var getIngredient = recipe.ingredients.filter((ingredient) => {
        return ingredient.ingredient.toLowerCase().includes(mainInput.value.toLowerCase());
      });
      return (
        recipe.name.toLowerCase().includes(mainInput.value.toLowerCase()) ||
        recipe.description.toLowerCase().includes(mainInput.value.toLowerCase()) ||
        getIngredient.length > 0
      );
    });
    if (getRecipe.length > 0) {
      deleteAllDom();
      var message = document.querySelector(".message");
      message.style.display = "none";
      message.textContent = "";
      data.data = getRecipe;
    } else {
      deleteAllDom();
      var message = document.querySelector(".message");
      message.style.display = "block";
      message.textContent = "Aucune recette trouvé";
    }
  }
}

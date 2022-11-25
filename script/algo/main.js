// Main algo : listen input event, search data in ingredient name and description
function mainAlgo(recipes) {
  const mainInput = document.forms[0][0];
  const regex =
    /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ ]+$/;
  mainInput.addEventListener("input", function () {
    var tag = document.querySelector(".tag");
    if (mainInput.value.length > 2 && regex.test(mainInput.value)) {
      var getRecipe = recipes.filter((recipe) => {
        var getIngredient = recipe.ingredients.filter((ingredient) => {
          return ingredient.ingredient.toLowerCase().includes(mainInput.value);
        });
        return (
          recipe.name.toLowerCase().includes(mainInput.value) ||
          recipe.description.toLowerCase().includes(mainInput.value) ||
          getIngredient.length > 0
        );
      });
      if (getRecipe.length > 0) {
        deleteAllDom();
        var message = document.querySelector(".message");
        message.style.display = "none";
        message.textContent = "";
        if (tag.childNodes.length > 0) {
          data.data = getRecipe;
          checkWhichTagPresent(data);
        } else {
          displayData(getRecipe);
          data.data = getRecipe;
        }
      } else {
        deleteAllDom();
        var message = document.querySelector(".message");
        message.style.display = "block";
        message.textContent = "Aucune recette trouvé";
      }
    } else if (mainInput.value.length == 0) {
      var message = document.querySelector(".message");
      message.style.display = "none";
      message.textContent = "";
      if (tag.childNodes.length > 0) {
        data.data = initialArrayOfData;
        checkWhichTagPresent(data);
      } else {
        displayData(initialArrayOfData);
      }
    } else {
      var message = document.querySelector(".message");
      message.style.display = "block";
      message.textContent =
        "3 caratères minimum pour effectué une recherche, les chiffres et caractères spéciaux ne sont pas autorisé.";
      if (tag.childNodes.length > 0) {
        data.data = initialArrayOfData;
        checkWhichTagPresent(data);
      } else {
        displayData(initialArrayOfData);
      }
    }
  });
}

// Close button tag and open div tag (input + all tag)
var keywordBtn = document.querySelectorAll(".showInput");
keywordBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.style.display = "none";
    var arrow = btn.nextSibling;
    arrow.style.display = "none";
    arrow.nextSibling.nextSibling.style.display = "block";
  });
});

// Close div tag (input + all tag) and open button tag
var closeBtn = document.querySelectorAll(".iconCloseArrow");
closeBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.parentNode.style.display = "none";
    var arrowClose = btn.previousSibling;
    var parent = arrowClose.parentNode;
    var arrow = parent.previousSibling.previousSibling;
    arrow.style.display = "block";
    var input = arrow.previousSibling;
    input.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Close div tag (input + all tag) when mainInput is focus
  var appareil = document.querySelector("#appareil");
  var ingredient = document.querySelector("#ingredient");
  var ustensil = document.querySelector("#ustensil");
  document.querySelector(".mainInput").addEventListener("focus", function () {
    if (ingredient.style.display == "block") {
      ingredient.style.display = "none";
      ingredient.previousSibling.previousSibling.style.display = "block";
      ingredient.previousSibling.previousSibling.previousSibling.style.display =
        "block";
    } else if (appareil.style.display == "block") {
      appareil.style.display = "none";
      appareil.previousSibling.previousSibling.style.display = "block";
      appareil.previousSibling.previousSibling.previousSibling.style.display =
        "block";
    } else if (ustensil.style.display == "block") {
      ustensil.style.display = "none";
      ustensil.previousSibling.previousSibling.style.display = "block";
      ustensil.previousSibling.previousSibling.previousSibling.style.display =
        "block";
    }
  });
  // Close div tag (input + all tag) when click on button tag
  document.querySelector(".firstInput").addEventListener("click", function () {
    closeInput(appareil, ustensil);
  });
  document.querySelector(".secondInput").addEventListener("click", function () {
    closeInput(ingredient, ustensil);
  });
  document.querySelector(".thirdInput").addEventListener("click", function () {
    closeInput(appareil, ingredient);
  });
});

// close div tag (input + all tag)
function closeInput(input1, input2) {
  if (input1.style.display == "block") {
    input1.style.display = "none";
    input1.previousSibling.previousSibling.style.display = "block";
    input1.previousSibling.previousSibling.previousSibling.style.display =
      "block";
  }
  if (input2.style.display == "block") {
    input2.style.display = "none";
    input2.previousSibling.previousSibling.style.display = "block";
    input2.previousSibling.previousSibling.previousSibling.style.display =
      "block";
  }
}

// Get json data of recipes
async function getRecipes() {
  const data = await fetch("./data/recette.json");
  const datajson = await data.json();

  return {
    recipes: [...datajson.recipes],
  };
}

// Check which tag is present, call updateDataWithTag and display data
function checkWhichTagPresent(recipes, type) {
  deleteAllDom();
  if (data.data.length > 0) {
    if (data.ingredient) {
      updateDataWithTag(
        recipes,
        type,
        getTagIngredientData,
        getTagApplianceData,
        getTagUstensilData,
        data.ingredient,
        data.appliance,
        data.ustensil
      );
      displayData(data.data);
    } else if (data.appliance) {
      updateDataWithTag(
        recipes,
        type,
        getTagApplianceData,
        getTagIngredientData,
        getTagUstensilData,
        data.appliance,
        data.ingredient,
        data.ustensil
      );
      displayData(data.data);
    } else if (data.ustensil) {
      updateDataWithTag(
        recipes,
        type,
        getTagUstensilData,
        getTagApplianceData,
        getTagIngredientData,
        data.ustensil,
        data.appliance,
        data.ingredient
      );
      displayData(data.data);
    } else {
      displayData(data.data);
    }
  }
}

// For check if tag > 0 and update data, and check if tag is delete (update data)
function updateDataWithTag(
  recipes,
  type,
  firstFunctionTag,
  secondFunctionTag,
  thirdFunctionTag,
  firstVarTag,
  secondVarTag,
  thirdVarTag
) {
  if (secondVarTag && secondVarTag.length > 0 && type == undefined) {
    secondFunctionTag();
  }
  if (thirdVarTag && thirdVarTag.length > 0 && type == undefined) {
    thirdFunctionTag();
  }
  if (type == "deleteTag") {
    data.data = initialArrayOfData;
    checkMainInputWithTag();
    if (
      (secondVarTag && secondVarTag.length > 0) ||
      (thirdVarTag && thirdVarTag.length > 0) ||
      (firstVarTag && firstVarTag.length > 0)
    ) {
      if (firstVarTag && firstVarTag.length > 0) {
        firstFunctionTag();
      }
      if (secondVarTag && secondVarTag.length > 0) {
        secondFunctionTag();
      }
      if (thirdVarTag && thirdVarTag.length > 0) {
        thirdFunctionTag();
      }
    } else {
      firstFunctionTag();
    }
  } else {
    firstFunctionTag();
  }
}

// Get data of json with ingredient tag
function getTagIngredientData() {
  data.ingredient.forEach(function (element, index, array) {
    var getRecipe = data.data.filter((recipe) => {
      var getIngredient = recipe.ingredients.filter((ingredient) => {
        return ingredient.ingredient.toLowerCase() == element.toLowerCase();
      });
      return getIngredient.length > 0;
    });
    data.data = getRecipe;
  });
}

// Get data of json with appliance tag
function getTagApplianceData() {
  data.appliance.forEach(function (element, index, array) {
    var getRecipe = data.data.filter((recipe) => {
      return recipe.appliance.toLowerCase() == element.toLowerCase();
    });
    data.data = getRecipe;
  });
}

// Get data of json with ustensil tag
function getTagUstensilData() {
  data.ustensil.forEach(function (element, index, array) {
    var getRecipe = data.data.filter((recipe) => {
      var getUstensil = recipe.ustensils.filter((ustensil) => {
        return ustensil.toLowerCase() == element.toLowerCase();
      });
      return getUstensil.length > 0;
    });
    data.data = getRecipe;
  });
}

// displayData
function displayData(recipes) {
  console.log(recipes);
  var ingredientsTags = [];
  var appliancesTags = [];
  var ustensilsTags = [];
  recipes.forEach(function (element, index, array) {
    array[index].ingredients.forEach(function (element, index, array) {
      ingredientsTags.push(element.ingredient);
    });
    appliancesTags.push(array[index].appliance);
    array[index].ustensils.forEach(function (element, index, array) {
      ustensilsTags.push(element);
    });
    factory(element, "recipes");
  });
  deleteDuplicateTag(ingredientsTags, "ingredients");
  deleteDuplicateTag(appliancesTags, "appliances");
  deleteDuplicateTag(ustensilsTags, "ustensils");
}

var data = [];
var initialArrayOfData = [];
getRecipes()
  .then((recipes) => {
    data.data = recipes.recipes;
    initialArrayOfData = recipes.recipes;
    mainAlgo(data.data);
    ingredientSearchTag(data.data);
    applianceSearchTag(data.data);
    ustensilSearchTag(data.data);
    displayData(data.data);
  })
  .catch((error) => console.log(error));

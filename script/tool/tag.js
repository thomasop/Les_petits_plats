// Search tag
function searchTagAlgo(recipes, number, type) {
  const input = document.forms[0][number];
  const regex =
    /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ ]+$/;
  input.addEventListener("input", function () {
    if (input.value.length >= 0 && regex.test(input.value)) {
      var arrayIngredient = [];
      var arrayAppliance = [];
      var arrayUstensil = [];
      if (type == "ustensils") {
        var getRecipe = data.data.filter((recipe) => {
          var getUstensil = recipe.ustensils.filter((ustensil) => {
            return ustensil.toLowerCase().includes(input.value.toLowerCase());
          });
          if (getUstensil.length > 0) {
            getUstensil.forEach((element) => {
              arrayUstensil.push(element);
            });
          }
        });
        if (arrayUstensil.length > 0) {
          var divError = document.querySelector("#showUst");
          divError.textContent = "";
          divError.classList.remove("colorText");
          deleteUstensilDom();
          deleteDuplicateTag(arrayUstensil, "ustensils");
        } else {
          var divError = document.querySelector("#showUst");
          divError.textContent = "Aucun tag trouvé";
          divError.classList.add("colorText");
        }
      } else if (type == "appliances") {
        var getRecipe = data.data.filter((recipe) => {
          return recipe.appliance.toLowerCase().includes(input.value.toLowerCase());
        });
        if (getRecipe.length > 0) {
          getRecipe.forEach((element) => {
            arrayAppliance.push(element.appliance);
          });
        }
        if (arrayAppliance.length > 0) {
          var divError = document.querySelector("#showApp");
          divError.textContent = "";
          divError.classList.remove("colorText");
          deleteApplianceDom();
          deleteDuplicateTag(arrayAppliance, "appliances");
        } else {
          var divError = document.querySelector("#showApp");
          divError.textContent = "Aucun tag trouvé";
          divError.classList.add("colorText");
        }
      } else if (type == "ingredients") {
        var getRecipe = data.data.filter((recipe) => {
          var getIngredient = recipe.ingredients.filter((ingredient) => {
            return ingredient.ingredient.toLowerCase().includes(input.value.toLowerCase());
          });
          if (getIngredient.length > 0) {
            getIngredient.forEach((element) => {
              arrayIngredient.push(element.ingredient);
            });
          }
        });
        if (arrayIngredient.length > 0) {
          var divError = document.querySelector("#showIng");
          divError.textContent = "";
          divError.classList.remove("colorText");
          deleteIngredientDom();
          deleteDuplicateTag(arrayIngredient, "ingredients");
        } else {
          var divError = document.querySelector("#showIng");
          divError.textContent = "Aucun tag trouvé";
          divError.classList.add("colorText");
        }
      }
    } else {
      var divErrorUstensil = document.querySelector("#showUst");
      divErrorUstensil.textContent = "";
      divErrorUstensil.classList.remove("colorText");
      var divErrorAppliance = document.querySelector("#showApp");
      divErrorAppliance.textContent = "";
      divErrorAppliance.classList.remove("colorText");
      var divErrorIngredient = document.querySelector("#showIng");
      divErrorIngredient.textContent = "";
      divErrorIngredient.classList.remove("colorText");
      deleteIngredientDom();
      deleteApplianceDom();
      deleteUstensilDom();
      var ingredientsTags = [];
      var appliancesTags = [];
      var ustensilsTags = [];
      data.data.forEach(function (element, index, array) {
        array[index].ingredients.forEach(function (element, index, array) {
          ingredientsTags.push(element.ingredient);
        });
        appliancesTags.push(array[index].appliance);
        array[index].ustensils.forEach(function (element, index, array) {
          ustensilsTags.push(element);
        });
      });
      deleteDuplicateTag(ingredientsTags, "ingredients");
      deleteDuplicateTag(appliancesTags, "appliances");
      deleteDuplicateTag(ustensilsTags, "ustensils");
    }
  });
}

// Delete duplicate tag
function displayUniqueTag(e, classAttri, onclickAttri) {
  var tags = document.querySelectorAll(".tag button");
  if (tags.length > 0) {
    for (var i = 0; i < tags.length; i++) {
      if (tags[i].textContent == e.innerText) {
        return;
      }
    }
    addDomTag(e, classAttri, onclickAttri);
  } else {
    addDomTag(e, classAttri, onclickAttri);
  }
}

//Add tag in DOM
function addDomTag(e, classAttri, onclickAttri) {
  var tag = document.querySelector(".tag");
  var btn = document.createElement("button");
  btn.textContent = e.innerText;
  btn.setAttribute("type", "button");
  btn.setAttribute("class", classAttri);
  var icone = document.createElement("img");
  icone.setAttribute("src", "./assets/icon/VectorClose.png");
  icone.setAttribute("alt", "");
  icone.setAttribute("class", "tagicone");
  icone.setAttribute("onclick", onclickAttri);
  tag.appendChild(btn);
  tag.appendChild(icone);
}

// Delete duplicate tag if same tag name
function deleteDuplicateTag(data, type) {
  var array = data.filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
  });
  array.forEach(function (element, index, array) {
    factory(element, type);
  });
}

// Remove text in all input
function removeTextTagInput() {
  var firstInput = document.querySelector(".hideInputFirst");
  var secondInput = document.querySelector(".hideInputSecond");
  var thirdInput = document.querySelector(".hideInputThird");
  firstInput.value = "";
  secondInput.value = "";
  thirdInput.value = "";
  var divErrorUstensil = document.querySelector("#showUst");
  divErrorUstensil.classList.remove("colorText");
  var divErrorAppliance = document.querySelector("#showApp");
  divErrorAppliance.classList.remove("colorText");
  var divErrorIngredient = document.querySelector("#showIng");
  divErrorIngredient.classList.remove("colorText");
}

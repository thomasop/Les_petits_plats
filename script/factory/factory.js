function factory(recipe, type) {
  if (type == "recipes") {
    return recipes(recipe);
  } else if (type == "ingredients") {
    return ingredients(recipe);
  } else if (type == "appliances") {
    return appliances(recipe);
  } else if (type == "ustensils") {
    return ustensils(recipe);
  }
}

// Display DOM recipes card
function recipes(recipe) {
  const { name, ingredients, description, time } = recipe;
  var section = document.querySelector(".recette");
  var article = document.createElement("article");
  var div = document.createElement("div");
  div.setAttribute("class", "bgDiv");
  var divContent = document.createElement("div");
  divContent.setAttribute("class", "bgDivContent");
  var divTop = document.createElement("div");
  divTop.setAttribute("class", "divTop");
  var divBottom = document.createElement("div");
  divBottom.setAttribute("class", "divBottom");
  var h2 = document.createElement("h2");
  h2.textContent = name;
  var span = document.createElement("span");
  var timeIcone = document.createElement("img");
  timeIcone.setAttribute("src", "./assets/icon/VectorTime.png");
  timeIcone.setAttribute("class", "iconeTime");
  span.textContent = time + " min";
  var ul = document.createElement("ul");
  ingredients.forEach((ingredient) => {
    var li = document.createElement("li");
    if (ingredient.quantity == undefined) {
      li.textContent = ingredient.ingredient;
    } else {
      if (ingredient.unit !== undefined) {
        if (ingredient.unit == "grammes") {
          li.textContent =
            ingredient.ingredient + ": " + ingredient.quantity + "g";
        } else if (ingredient.unit == "ml") {
          li.textContent =
            ingredient.ingredient + ": " + ingredient.quantity + "ml";
        } else if (
          ingredient.unit == "cuillères à soupe" ||
          ingredient.unit == "cuillères à café"
        ) {
          li.textContent =
            ingredient.ingredient + ": " + ingredient.quantity + " cuillères";
        } else if (ingredient.unit == "cl") {
          li.textContent =
            ingredient.ingredient + ": " + ingredient.quantity + "cl";
        } else if (
          ingredient.unit == "tranches" ||
          ingredient.unit == "pincées"
        ) {
          li.textContent =
            ingredient.ingredient +
            ": " +
            ingredient.quantity +
            " " +
            ingredient.unit;
        }
      } else {
        li.textContent = ingredient.ingredient + ": " + ingredient.quantity;
      }
    }
    ul.appendChild(li);
  });
  var p = document.createElement("p");
  if (description.length < 174) {
    p.textContent = description;
  } else {
    p.textContent = description.slice(0, 174) + "...";
  }
  var divTopTime = document.createElement("div");
  divTop.appendChild(h2);
  divTopTime.appendChild(timeIcone);
  divTopTime.appendChild(span);
  divTop.appendChild(divTopTime);
  divContent.appendChild(divTop);
  divBottom.appendChild(ul);
  divBottom.appendChild(p);
  divContent.appendChild(divBottom);
  article.appendChild(div);
  article.appendChild(divContent);
  section.appendChild(article);
}

// Display DOM ingrédient tag
function ingredients(recipe) {
  var divIngredient = document.querySelector("#showIng");
  var btnIng = document.createElement("button");
  btnIng.setAttribute("type", "button");
  btnIng.setAttribute("class", "btnIng");
  btnIng.setAttribute("onclick", "ingredientAddTag(this)");
  btnIng.textContent = recipe;
  divIngredient.appendChild(btnIng);
}

// Display DOM appliance tag
function appliances(recipe) {
  var divAppareil = document.querySelector("#showApp");
  var btnApp = document.createElement("button");
  btnApp.setAttribute("type", "button");
  btnApp.setAttribute("class", "btnApp");
  btnApp.setAttribute("onclick", "applianceAddTag(this)");
  btnApp.textContent = recipe;
  divAppareil.appendChild(btnApp);
}

// Display DOM ustensil tag
function ustensils(recipe) {
  var divUstensil = document.querySelector("#showUst");
  var btnUst = document.createElement("button");
  btnUst.setAttribute("type", "button");
  btnUst.setAttribute("onclick", "ustensilAddTag(this)");
  btnUst.setAttribute("class", "btnUst");
  btnUst.textContent = recipe;
  divUstensil.appendChild(btnUst);
}

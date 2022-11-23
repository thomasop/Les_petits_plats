// Delete DOM of div .recette, div tag #showIng, div tag #showApp, div tag #showUst
function deleteAllDom() {
  var section = document.querySelector(".recette");
  section.innerHTML = "";
  var divIng = document.querySelector("#showIng");
  divIng.innerHTML = "";
  var divApp = document.querySelector("#showApp");
  divApp.innerHTML = "";
  var divUst = document.querySelector("#showUst");
  divUst.innerHTML = "";
}

// Delete DOM of div tag #showIng
function deleteIngredientDom() {
  var divIng = document.querySelector("#showIng");
  divIng.innerHTML = "";
}

// Delete DOM of div tag #showApp
function deleteApplianceDom() {
  var divApp = document.querySelector("#showApp");
  divApp.innerHTML = "";
}

// Delete DOM of div tag #showUst
function deleteUstensilDom() {
  var divUst = document.querySelector("#showUst");
  divUst.innerHTML = "";
}

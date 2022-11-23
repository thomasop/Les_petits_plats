// Search ingredient tag with input
function ingredientSearchTag(recipes) {
  searchTagAlgo(recipes, 2, "ingredients");
}

// Add appliance tag
function ingredientAddTag(e) {
  const input = document.forms[0][2];
  input.value = "";
  var div = document.querySelector("#ingredient");
  div.style.display = "none";
  var btn = document.querySelector(".firstInput");
  btn.style.display = "block";
  var icone = btn.nextSibling;
  icone.style.display = "block";
  removeTextTagInput();
  displayUniqueTag(e, "tagIngredient", "ingredientDeleteTag(this)");
  var arrayTag = [];
  const divTag = document.querySelectorAll(".tag .tagIngredient");
  divTag.forEach((tag) => arrayTag.push(tag.textContent));
  data.ingredient = [];
  data.ingredient = arrayTag;
  checkWhichTagPresent(data);
}

// Delete ingredient tag
function ingredientDeleteTag(e) {
  var btn = e.previousSibling;
  if (data.ingredient.length > 0) {
    data.ingredient.forEach(function (element, index, array) {
      if (element == btn.textContent) {
        data.ingredient.splice(index, 1);
      }
    });
  }
  var tag = document.querySelector(".tag");
  tag.removeChild(e);
  tag.removeChild(btn);
  checkWhichTagPresent(data, "deleteTag");
}

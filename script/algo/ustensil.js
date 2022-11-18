// Search ustensil tag with input
function ustensilSearchTag(recipes) {
    searchTagAlgo(recipes, 6, 'ustensils');
}

// Add appliance tag
function ustensilAddTag(e) {
    const input = document.querySelector(".hideInputThird");
    input.value = ""
    var div = document.querySelector("#ustensil")
    div.style.display = "none"
    var btn = document.querySelector(".thirdInput")
    btn.style.display = "block";
    var icone = btn.nextSibling;
    icone.style.display = "block";
    removeTextTagInput();
    displayUniqueTag(e, "tagUstensil", "ustensilDeleteTag(this)")
    var arrayTag = [];
    const divTag = document.querySelectorAll(".tag .tagUstensil");
    divTag.forEach((tag) => (arrayTag.push(tag.textContent)));
    data.ustensil = [];
    data.ustensil = arrayTag;
    checkWhichTagPresent(data);
}

// Delete ustensil tag
function ustensilDeleteTag(e) {
    var btn = e.previousSibling;
    if (data.ustensil.length > 0) {
        data.ustensil.forEach(function(element, index, array) {
            if (element == btn.textContent) {
                data.ustensil.splice(index, 1)
            }
        })
    }
    var tag = document.querySelector(".tag");
    tag.removeChild(e);
    tag.removeChild(btn);
    checkWhichTagPresent(data, 'deleteTag');
}
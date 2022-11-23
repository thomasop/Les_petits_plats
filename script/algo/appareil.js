// Search appliance tag with input
function applianceSearchTag(recipes) {
  searchTagAlgo(recipes, 4, "appliances");
}

// Add appliance tag
function applianceAddTag(e) {
  const input = document.querySelector(".hideInputSecond");
  input.value = "";
  var div = document.querySelector("#appareil");
  div.style.display = "none";
  var btn = document.querySelector(".secondInput");
  btn.style.display = "block";
  var icone = btn.nextSibling;
  icone.style.display = "block";
  removeTextTagInput();
  displayUniqueTag(e, "tagAppareil", "applianceDeleteTag(this)");
  var arrayTag = [];
  const divTag = document.querySelectorAll(".tag .tagAppareil");
  divTag.forEach((tag) => arrayTag.push(tag.textContent));
  data.appliance = [];
  data.appliance = arrayTag;
  checkWhichTagPresent(data);
}

// Delete appliance tag
function applianceDeleteTag(e) {
  var btn = e.previousSibling;
  if (data.appliance.length > 0) {
    data.appliance.forEach(function (element, index, array) {
      if (element == btn.textContent) {
        data.appliance.splice(index, 1);
      }
    });
  }
  var tag = document.querySelector(".tag");
  tag.removeChild(e);
  tag.removeChild(btn);
  checkWhichTagPresent(data, "deleteTag");
}

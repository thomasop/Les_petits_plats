var keywordBtn = document.querySelectorAll(".showInput");
keywordBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        btn.style.display = "none";
        var arrow = btn.nextSibling;
        arrow.style.display = "none";
        var input = btn.nextSibling.nextSibling.nextSibling;
        input.style.display = "block";
        var arrowClose = input.nextSibling;
        arrowClose.style.display = "block";
    })
});

var closeBtn = document.querySelectorAll(".iconCloseArrow");
closeBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        btn.style.display = "none";
        var arrowClose = btn.previousSibling;
        arrowClose.style.display = "none";
        var arrow = btn.previousSibling.previousSibling.previousSibling;
        arrow.style.display = "block";
        var input = arrow.previousSibling;
        input.style.display = "block"
    })
});
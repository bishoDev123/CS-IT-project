function showMore() {
    var extraText = document.getElementById("extra-text");
    var link = event.target;

    if (extraText.style.display === "none") {
        extraText.style.display = "block";
        link.textContent = "Read Less";
    } else {
        extraText.style.display = "none";
        link.textContent = "Read More";
    }
}



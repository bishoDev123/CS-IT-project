function showMore(event) {
    const button = event.target;
    const reviewBox = button.closest(".card");
    const extraText = reviewBox.querySelector(".extra-text");

    if (extraText.style.display === "none" || extraText.style.display === "") {
        extraText.style.display = "block";
        button.textContent = "Read Less";
    } else {
        extraText.style.display = "none";
        button.textContent = "Read More";
    }
}
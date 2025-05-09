const buyButton = document.getElementById("buy-button");
const carName = document.getElementById("name");
const carPrice = document.getElementById("price");
const carImage = document.getElementById("car-image");
const carDescription = document.getElementById("description");

const car = JSON.parse(localStorage.getItem("selectedCar"));

if (car) {
    carName.textContent = car.name;
    carPrice.textContent = "$" + car.price;
    carDescription.textContent = car.description;
    carImage.src = car.image; 
}
else {
    document.body.innerHTML = "404 did not find car";
}

buyButton.addEventListener("click", (e) => {
    window.location.href = "../Home/home.html";
});
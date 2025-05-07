const carCardTemplate = document.querySelector("[data-car-template]");
const carsContainer = document.querySelector("[cars-container]");
const searchInput = document.querySelector("[data-search]");
let Cars = [];

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    Cars.forEach(car => {
        const isVisible = car.name.toLowerCase().includes(value) || car.price.toLowerCase().includes(value);
        car.element.classList.toggle("hide", !isVisible);
    });
});

fetch("../cars.JSON")
    .then((response) => response.json())
    .then(data => {
        const cars = data.cars;
        Cars = cars.map(car => {
            const card = carCardTemplate.content.cloneNode(true).children[0];
            const carImage = card.querySelector("[data-image]");
            const carName = card.querySelector("[data-name]");
            const carPrice = card.querySelector("[data-price]");
            carImage.src = car.image; 
            carName.textContent = car.name;
            carPrice.textContent = car.price;
            carsContainer.append(card);  
            return { name: car.name, price: car.price, image: car.image, element: card };                                  
        });
    })
    .catch(error => console.error("Error fetching car data:", error));
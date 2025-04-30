fetch("../cars.JSON")
  .then((response) => response.json())
  .then((data) => {
    const selects = document.querySelectorAll("#selectedCar");
    const cars = data.cars;

    const optionsHTML =
      `
            <option value="" disabled selected>Select a car</option>
        ` +
      cars
        .map(
          (car) => `
            <option 
            value="${car.name}"
            price="${car.price}"
            description="${car.description}"
            image="${car.image}">
            ${car.name} - ${formatPrice(car.price)}</option>
        `
        )
        .join("");

    selects.forEach((select) => {
      select.innerHTML = optionsHTML;
      select.addEventListener("change", (event) => {
        change(event);
      });
    });
  })
  .catch((error) => {
    handleError(error);
  });

function handleError(error) {
  console.error("Error loading JSON:", error);
  document.body.innerHTML +=
    "<p>Failed to load car data. Please try again later.</p>";
}

function change(event) {
  const container = event.target.closest("#container");

  if (container) {
    //stores the selected value in a variable via accessing the options and using the index of the option selected
    const selectedOption = event.target.options[event.target.selectedIndex];

    const carName = selectedOption.value;
    const carPrice = selectedOption.getAttribute("price");
    const imageURL = selectedOption.getAttribute("image");
    const carDescription = selectedOption.getAttribute("description");

    container.innerHTML = `
    <div class="image-wrapper">
      <img src="${imageURL}" alt="${carName}">
    </div>
    <h1>${carName}</h1>
    <h3>Price: ${formatPrice(carPrice)}</h3>
    <p>${carDescription}</p>
    `;
  }
}

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

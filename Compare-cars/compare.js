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
            <option value="${car.name}">${car.name} - ${new Intl.NumberFormat(
            "en-US",
            {
              style: "currency",
              currency: "USD",
            }
          ).format(car.price)}</option>
        `
        )
        .join("");
    selects.forEach((select) => {
        select.innerHTML = optionsHTML;
    });
  })
  .catch((error) => {
    //console fall safe display
    console.error("Error loading JSON:", error);
    //visual display
    document.body.innerHTML +=
      "<p>Failed to load car data. Please try again later.</p>";
  });

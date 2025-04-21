fetch('../cars.JSON')
    .then(response => response.json())
    .then(cars => {
        const test = document.getElementById("test");
        const car = cars.cars[0];

        test.innerHTML = `<h1>${car.name}</h1>`
    }).catch(error => {
        console.error('Error loading JSON:', error);
      });
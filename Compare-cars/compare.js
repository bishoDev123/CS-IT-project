fetch('../cars.JSON')
    .then(response => response.json())
    .then(cars => {
        const test = document.getElementById("test");
        const car = cars.cars[0];

        const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(car.price);

        test.innerHTML = 
            `<img src="${car.image}"></img>
             <h1>${car.name}</h1>
             <h2>${formattedPrice}</h2>
             <p>${car.description}</p>`
    }).catch(error => {
        console.error('Error loading JSON:', error);
      });
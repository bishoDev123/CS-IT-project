const carCardTemplate = document.querySelector("[data-car-template]");

fetch("../cars.JSON")
    .then((response) => response.json())
    .then(data => {
        data.forEach(cars => {
            const card = carCardTemplate.content.cloneNode(true).children[0];
            console.log(cars);   
        });
        
    })
    
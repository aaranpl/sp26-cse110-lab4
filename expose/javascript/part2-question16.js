let statistics = {
redcars: 21,
blueCars: 45,
greenCars: 12,
racecars: 5,
blackCars: 40,
rareCars: 2
};

for( let i in statistics) {
    if(i[0] === "r" || statistics[i] % 2 === 1) {
        console.log(statistics[i]);
    }
}
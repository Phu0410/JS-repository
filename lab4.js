'use strict'
// 4.1
function describeCountry(country, population, capitalCity) {
    const describe = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return describe;
}
const country_1 = describeCountry('Vietnam', 89, 'Hanoi');
const country_2 = describeCountry('Russia', 100, 'ekiv');
const country_3 = describeCountry('Thailand', 60, 'Bangkok');
console.log(country_1);
console.log(country_2);
console.log(country_3);
// 4.2
// 4.2.1
const populationWorld = 7900;
function percentageOfWorld1(population) {
    const percentageOfWorld = (population / populationWorld) * 100;
    return percentageOfWorld;
}
const population_1 = percentageOfWorld1(1441);
const population_2 = percentageOfWorld1(89);
const population_3 = percentageOfWorld1(181);
console.log(population_1);
console.log(population_2);
console.log(population_3);
// 4.2.2
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}
const popu1 = percentageOfWorld2(1441);
const popu2 = percentageOfWorld2(89);
console.log(popu1);
console.log(popu2);
console.log(percentageOfWorld2(181))
//  4.3
const percentageOfWorld3 = population => (population / 7900) * 100;
console.log(percentageOfWorld3(1441));
console.log(percentageOfWorld3(89));
console.log(percentageOfWorld3(181));
// 4.4
const describePopulation = function (country, population) {
    const percent = percentageOfWorld_1(population);
    return `${country} has ${population} milllion people, which is about of ${percent}% the world`
}
const percentageOfWorld_1 = population => (population / 7900) * 100;
console.log(describePopulation('VietNam', 89));
console.log(describePopulation('China', 1441));
console.log(describePopulation('Thailand', 181));

// 3.1
const a = '9' - '5';
const b = '19' - '13' + '17';
const c = '19' - '13' + 17;
const d = '123' < 57; 
const e= 5 + 6 + '4' + 9 - 4 - 2;
console.log(a, b, c, d, e);
// 3.2
// let numNeighbours = 1
// prompt  ('How many neighbor countries does your country have?'));
// if (numNeighbours === 1) {
//    console.log('Only 1 border!'); 
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }
// nếu ta để === 1 thì sẽ in ra giá trị là NO borders vì js sẽ hiểu prompt là 1 string nên ta cần ép kiểu => Number
// 3.3
// const country = prompt('Country?');
// const language = prompt('language?');
// const population = prompt('population?');
// const isIsland = prompt('isIsland?');
// if (language === 'english' && population < 50 && isIsland === 'no' ) {
//     console.log(`You should live in ${country} :)` );
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }
//3.4
const language = 'English';
switch (language) {
    case 'Chinese': console.log('MOST number of native speakers!');
    break;
    case 'Spanish' : console.log('2nd place in number of native speakers!');
    break;
    case 'English' : console.log('3rd place');
    break;
    case 'Hindi' : console.log('Number 4');
    break;
    case 'Arabic' : console.log('5th most spoken language');
    break;
    default : console.log('Great language too :D');
    break;
}
//3.5
let population = 130;
population > 33 ? console.log("Portugal's population is above average") : console.log("Portugal's population is below average");
console.log(`Portugal's population is ${population > 33 ? 'above' : 'below'} average`);

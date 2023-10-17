/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const PI = Math.PI;
const pricePizza13= 16.99;
const pricePizza17= 19.99;

let radioPizza13 = 13/2;
let radioPizza17 = 17/2;

let area13 = Math.pow((PI * radioPizza13), 2);
let area17 = Math.pow((PI * radioPizza17), 2);

// 2. What is the cost per square inch of each pizza?

let pizza13Cost = parseFloat(area13 / pricePizza13).toFixed(2);
let pizza17Cost = parseFloat(area17 / pricePizza17).toFixed(2);

console.log(`1. What is the area for each of these pizzas? \n
            The area of a 13” pizza per inch is ${area13} \n
            The area of a 17” pizza per inch is ${area17} \n
            __________________________________________________ \n
            2. What is the cost per square inch of each pizza?\n
            The cost of a 13” pizza per inch is ${pizza13Cost} \n
            The cost of a 17” pizza per inch is ${pizza17Cost} `);
        

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
function DrawCard(){
    let cardNumber = Math.floor( Math.random() * 13 );
    return cardNumber;
}
function GetCardName(_cardNumber){
    let cardValue='';
    switch (_cardNumber) {
        case 1:
            cardValue='Ace';
            break;
        case 11:
            cardValue='Jack';
            break;
        case 12:
            cardValue='Queen';
            break;
        case 13:
            cardValue='King';
            break;
        default:
            cardValue = _cardNumber.toString();
            break;
    }
    return cardValue;
}
console.log(` 3. Using the Math object, put together a code snippet \n
            Your card is ${GetCardName(DrawCard())}`);

// 4. Draw 3 cards and use Math to determine the highest
let cards = new Array();

for (let index = 0; index < 3; index++) {
    cards.push(DrawCard());
}
console.log(` 4. Draw 3 cards and use Math to determine the highest \n
            ${cards.toString()} \n
            The highest card is ${GetCardName(Math.max(...cards))}`);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and . Use
// this information to create a formatted address block
// that could be printed onto an envelope.
let contact={
    firstName: 'Laura',
    lastName: 'Zanella',
    streetAddress: '1410 NE Campus Pkwy',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98195'
}
console.log(`\n
            *************************************************************************************** \n\n
             .......First Name: ${contact.firstName}          Last Name: ${contact.lastName}         \n
             .......Street Address: ${contact.streetAddress}                                         \n
             .......City: ${contact.city}                     State: ${contact.state}                \n
             .......Zip Code: ${contact.zipCode}                                                     \n\n
            ***************************************************************************************
            `)

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
const string = 'Laura Zanella 1410 NE Campus Pkwy Seattle WA 98195';
let firstBlankSpace = string.indexOf(' ',0);
let firstName = string.slice(0,firstBlankSpace);
let firstNameMethod2 = string.split(' ')[0];
console.log(`First Name is ${firstName}`);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020, 1, 1)
const endDate = new Date(2020, 4, 1);
const timeDifference = Math.abs(endDate - startDate);
const daysDifference = (Math.ceil(timeDifference / (1000 * 60 * 60 * 24)))/2;
const middleDate = startDate.setDate(startDate.getDate() + (daysDifference));

console.log(`The middle date between 1/1/2020 and 4/1/2020 is ${new Date(middleDate)}`);

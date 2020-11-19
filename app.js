console.log("Hello");
console.info("Hello 2");

console.error('Hello');

/*for(var i=0; i<5; i++) {
    console.log(i);
}

var mArray = [1, 2, "Chessie"];

for(var i=0; i<5; i=i+2) {
    console.log(mArray[i]);
}

/*alert('Chessie');
*/


/*var name = prompt('Please enter your name');

console.log('Users name is  ', name)

alert('Hi ' + name);
*/

/*function myName() {
    prompt("What is your name?")
}*/

function myName() {
    var name = prompt("What is your name?");
    console.log(name);

    alert(`Welcome to Week 5, ${name}!`);

}

var name = myName();
console.log("what is the output", name);


myName();

// Exercise 1: Arguments

function movieDetails(title, released) {
    return
}

movieDetails("Harry Potter", 2000);

// Exercise 2: Control Flow
var shoppingCart = function(item, cost, balance) {
    if(cost <= balance) {
        return `You can afford to buy this item. ${item}`;
    }
    else {
        return `Sorry, you do not have the funds to buy thsi item`;
    }
}

var message = shoppingCart("fireworks", 100, 1000);
console.log(message);

var noMoney = shoppingCart("cake", 10, 1);
console.log(noMoney);

//SCOPE 

function scopeTesting() {
    var animal = "cat";
}

console.log(animal);






var string1 = 'Code';
console.log(string1);

var string2 = 'String 2'
console.log(string2);

var cfg1 = string1 + ' ' + string2 + '!'; //Concatenation
console.log(cfg1);

var cfg2 = `${string1} ${string2}!`; //Interpolation
console.log(cfg2);

var number_1 = 5;
console.log(number_1);

var sum1 = number_1 + 36;
console.log(sum1);

var parsedNumber = parseInt("1")
console.log(parsedNumber);
console.log(typeof parsedNumber);

var bool = true;
console.log(bool);

var nothing = null
console.log(nothing)

var show_name = 'One Tree Hill'
console.log(show_name)

var show_seasons = 9
console.log(show_seasons)

var show_rating = 7.5
console.log(show_rating)

var show_finished = true;

var sentence1 = show_name + ' was a show of length ' + show_seasons + ' seasons. Its' + show_finished + ' that the show has finished.'

var show_info = 'One Tree Hill is a series about a group of teenagers. It is rated 15 and is no longer on air.'
console.log(show_info)


/*alert("I am having a party. Would you like to RSVP?")
var answer = prompt("Yes  [y]  or No  [n]");

if (answer === 'y'){
    alert("Great! See you there.");
} else {
    alert(":(")
}
*/

var list = ['yellow', 21, true, null]
var fruit = ['kiwi', 'pineapple', 'grapes']

console.log(list[1]);
console.log(fruit[2])

list.push('Harry Potter');
console.log(list);

list.shift();
console.log(list);

var countries = ['Kenya', 'China', 'Sweden']

countries.push('France')
console.log(countries);

countries.shift();
console.log(countries);

countries.splice(1,0,"Germany")
console.log(countries)

var countryList = countries.join(', ') //appears as a list rather than in brackets
console.log(countryList)



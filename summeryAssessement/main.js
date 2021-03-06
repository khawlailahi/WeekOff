// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

//=============================================================================
/*                                  Q1                                    */
//=============================================================================
// Write a function called addID that takes an object and an id code",
//and returns a new object with an added `id` property to it. The `id`'s value will be the id code.
// Things to consider:
// * If no id code is given, assign n/n as the property's value.
// * If the id code is not a number, returns Invalid id.
// addID({name : "Barbra Karst"},4567); // {name :"Barbra Karst", id: 4567}
// addID({a : 1}); // {a : 1, id: 'n/n'}
// addID({c : 2}, 'ABC'); // "Invalid code"

function addID(object, id ){
  if(!id)
    id="n/n";

  else if(!parseInt(id))
    return "Invalid code";

  object.id = id; 
  return object;

}
//=============================================================================
/*                                  Q2                                    */
//=============================================================================
// Write a function called allHaveLastNames that takes an array of names (strings) as input,
//and returns true if all names in the array have a last name, and false if not.
//solve it using the most appropriate helper functions(reduce,each,map,filter).
var Folks = ["Sierra Heimbach", "Angelica Storms",   "Lampton",  "Hampshire"];
var FollkWithLast =  ["Sierra Heimbach", "Angelica Storms", "Doretta Linen"];
// AllHaveLastNames(Folks); //false
// AllHaveLastNames(FollkWithLast); //true

function allHaveLastNames(array){
  return reduce(array, function( acc, element){
    if((element.indexOf(" ") !== -1) && (element[element.indexOf(" ")+1] !== undefined))
      return true;
    return false ;
  })
 

}

//=============================================================================
/*                                  Q3                                        */
//=============================================================================
// Write a function called coinFlip that randomly returns either "heads" or "tails".
// Each outcome should have an equal chance of happening.
//Hint: Math.random()
function  coinFlip (){
  //if it's 1 
  if(Math.round(Math.random()))
    return "tails";
  return "heads";
}

//=============================================================================
/*                              Q4                                           */
//=============================================================================
// Write a function called assignStudnetID that takes an array of students’ names, a starting number,
//and an optional 3rd argument. This function should return a new array of objects,
//each with a `name` property (students’ name), and an `id` property.
// Each student should get an ID code starting from `11000`,and increment by the optional 3rd parameter.

// Things to consider:
//  If a 3rd argument is not provided, increment by 1 for each student.
// var students = ["Aleen Y. Atkins", "Alvaro L. Angelos", "Denese Dossett", "Douglas Denney"];

// var firstArray = assignStudnetID(students, 11000);
// var secondArray = assignStudnetID(students, 11000, 12);

// firstArray[0]; // {name: 'Aleen Y. Atkins', id: 11000};
// firstArray[1]; // {name: 'Alvaro L. Angelos', id: 11001};

// secondArray[0]; // {name: 'Aleen Y. Atkins', id: 11000};
// secondArray[1]; // {name: 'Alvaro L. Angelos', id: 11012};
// secondArray[2]; // {name: 'Denese Dossett', id: 11024};

function  assignStudnetID(students, start, add){
  var add1 = add || 1;
  start = start - add1;
  return map(students, function(element, i){
    start+= add1;
    return{name: element, id : start};;
  })

}

//=============================================================================
/*                                  Q5                                         */
//=============================================================================
//Write a function called lastNElements that takes two Parameters as an input,  an array of numbers  and a number n,
// and returns a new array with the last n elements only.
//solve it using one of the most appropriate helperthe helpers functions(each,map,filter).
// lastNElements( [1,2,3,4],2 ) ==> [3,4]
// lastNElements( [9,2,3,4,6],1) ==> [6]
// lastNElements( [], 3 ) ==> []
// lastNElements( [5,6,8,9,12], 9 ) ==> [5,6,8,9,12]

function lastNElements(array, n) {
  
   return filter(array,function(element, i){
    return i >= (array.length - n);
   })
}
//=============================================================================
/*                                  Q6                                        */
//=============================================================================
//Write a function called replaceDigit that takes a string as input and returns new string
//after replace first digit in the string (should contains at least digit) with & character.
//replaceDigit("abc1dabc") ==> abc&dabc
//replaceDigit("p3ython") ==> p&ython

function  replaceDigit(string){
  var array = string.split('');
   for(var i = 0; i < array.length  ; i++ ){
    if(parseInt(array[i]) ){
      array[i] = "&"
      // return array.join("")
      break;
    }
   
  };
   return array.join('')
}


//=============================================================================
/*                                  Q7                                       */
//=============================================================================
//Using recursion, write a function called arraySum that takes an array of numbers as parameter
// and returns the sum of all numbers in the array except the last one.
// arraySum([1, 2, 3, 4, 5, 6]) ==> 15
// arraySum([1, 2, 4]) ==>   3

function arraySum(array){
	var i = 0;
	var sum = 0;
	function summ(){
		if(i === array.length-1)
			return 0
		sum+= array[i]
        i++;
		summ();
        
        return sum;
	}
	return summ();
}

//=============================================================================
/*                                  Q8                                   */
//=============================================================================
//Depending on data modeling concept that you have learned:
// create a factory function called makeProfile that return object  has the following properties:
//  "name" with a string value
//  "age" with a number value
//  "knowsJavascript" with a boolean value
//  "pets" with an array value

// write function displayProfile that can be used to display one profile.
// write function displayProfilePets that can be used to display all the elements inside pets array.
// myProfile =  {
// name : "Sahar",
// age : 30,
// knowsJavascript :true,
// pets : ["Pandacat", "SashaGoat"]
// };

// displayProfile (myProfile) ===>   name : "Sahar"
//                                   age : 30
//                                   knowsJavascript :true
//                                   pets : ["Pandacat"]

//  displayProfilePets (myProfile)  ===> Pandacat,SashaGoat
function makeProfile(name, age, knowsJavascript, pets){
  return{name: name,
         age: age,
         knowsJavascript: knowsJavascript,
         pets: pets
        }
}

function displayProfile(profile){
  return "name: " + profile.name + "\n" + "age: " + profile.age + "\n" + "knowsJavascript: " + profile.knowsJavascript + "\n" + "pets: [" + profile.pets + "]";
}
function displayProfilePets(profile){
  var display = "";
  if(profile.pets.length === 0)
    return display;

  else if(profile.pets.length === 1)
    return profile.pets[0];

  else if(profile.pets.length > 1){
    for(var i = 0; i < profile.pets.length - 1 ; i++){
      display +=  profile.pets[i] + ", ";
    }
    return display += profile.pets[profile.pets.length - 1]
  }
}
//=============================================================================
/*                                  Q9                                     */
//=============================================================================
/*
  Create a ReadingList class by using OOP concept, where:
  Your class should has:
  "read" for the number of books that finish reading
  "unRead" for the number of books that still not read
  "toRead" array for the books names that want to read in the future
  "currentRead" for the name of the book that is reading currently
  "readBooks" Array of the names of books that finish read
  "AddBook" function that:
  a- Accept the book name as parameter
  b- Add the new book to "toRead" array
  c- Increment the number of the unread books.
  "finishCurrentBook" function that:
  a- Add the "currentRead" to the "readBooks" array
  b- Increment the "read" books
  c- Change the "currentRead" to be the first book from "toRead" array
  d- Decrement the number of "unread" books
  */

// Now, to make sure that you are actually reading, make a comment below this and type: Yes I am
// i am !
function ReadingList(read, unRead, toRead, currentRead, readBooks){
  var obj = {};

  obj.read = read;
  obj.unRead = unRead;
  obj.toRead = toRead;
  obj.currentRead = currentRead;
  obj.readBooks = readBooks;
  obj.AddBook = AddBook;
  obj.finishCurrentBook = finishCurrentBook;

  return obj;
}

var AddBook = function(name){
  this.toRead.push(name);
  this.unRead += 1;
}

var finishCurrentBook = function(){
  this.readBooks.push(this.currentRead);
  this.read += 1;
  this.currentRead = this.toRead[0];
  this.unRead = this.unRead - 1;
}
//=============================================================================
/*                                  Q10                                      */
//=============================================================================
//Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
//makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
//itemSize should be either "big", "medium" and "small"
//big sized items will hold 3 slots in the storage
//medium sized items will hold 2 slots in the storage
//small sized items  will hold 1 slot in the storage
//return "Can't fit" if you try to add an item that exceeds the storage size limit
//when the safe is full return a string representing all the items that are in the safe
//Example:
 var safe = makeSafe(5)
//  safe('watch','small')
//  safe('gold-bar','big')
//  safe('silver-bar','big') => "Can't fit"
//  safe('money','small') => "watch gold-bar money"

function makeSafe (limit){
  var safe = '';
  function addItem(item, itemSize){

    if(itemSize === 'small' && (limit - 1 >= 0)){
      safe += " " + item;
      limit = limit - 1
    }
    else if(itemSize === 'medium' && (limit - 2 >= 0)){
      safe += " " + item;
      limit = limit - 2
    }
    else if(itemSize === 'big' && (limit - 3 >= 0)){
      safe += " " + item;
      limit = limit - 3
    }
    else {return "can't fit" }

    if (limit == 0)
      return safe;

    

  }
  return addItem;
}

//=============================================================================
/*                                  Q11                                        */
//=============================================================================

//DO NOT USE JQUERY
//1. Create a HTML file, add 3 text fields to it next to each other, 1 button below them, 1 headline below the button
// 2. Create a JS file and connect it to the HTML
// 3. Create a CSS file and link it to the HTML
// 4. Create a function in the JS file that takes a number from the first and the third text fields and takes (+, -, *, /)
//from the second text field, then it calculates the operation and changes the headline to the result.
// 5. The function should change the color of the headline to green if the result is smaller than 100,
//to blue if it’s equal to or larger than 100 and to red if the input in the first or the third text fields
//is not a number and if the second text field is not one of the 4 operations (wrong inputs)
// 6. Style the HTML elements in the CSS file as you see fit and center them in the webpage

//================================================================================
/*                              Q12                                             */
//================================================================================
//Using jQuery
//create HTML file
//create js file and link it to HTML file and add the jquery link also.

/*
    Put this HTML code in HTML file that you created 
    <button id="clickMe">Click me to hide the hidden spies!</button>
    <p class="secret">I am hidden SPY #1.</p>
    <p class="secret">I am hidden SPY #2.</p>
    <p class="secret">I am hidden SPY #2.</p>
    <p>I am <em>not</em> a hidden SPY.</p>
    <button id ="create"> Clear </button>
    <button id ="delete"> Clear </button>
    */

// Using jQuery write a function gets called when the user clicks the button clickMe.
// the paragraphs that start with the words "I am a hidden SPY" slide up.

//Using jQuery write a function that gets called when the user clicks create button.
//The function should create new paragraph with class secret.
//Using jQuery write a function that gets called when the user clicks delete button.
//The function should removes all the paragraphs.

//================================================================================
/*                              Q13                                             */
//================================================================================
// Theoretical questions.
// 1- In your own words,Why do we use Closures ?
//  ---- > we use Closures to enable data privacy : the variables declares inside the outer function are only accessible by the inner functions which helps us protect our data

// 2- In OOP, what does "this" refer to ?
//---> Inside a function, the keyword this refers to the object that was to the left of the dot where that function was called.

// 3- What is jQuery?
//----> jQuery is a lightweight, "write less, do more", JavaScript library.

// 4- what is the diffrence between Closure's methods and The OOP's methods?
//---->closure is declaring function inside your outer function to preserve data privacy
 //--> oop saves memory by defining  the function inside variables  outside of the class and refering to them inside the object of the class (as methods) using the name of the variables

// 5- What are variables?
//----> variables are spots in memory to store data which value can be changed 

// 6- 5-What  is the difference between == and === ?
//-----> == compares between two values / variables regardless of their type (does not compare their type) 
//----> === compares between two values / variables while considering of their type ( compare their type) 

//7- What’s the Higher-Order Function ?
//-----> A Higher-Order Function is a function that accepts a function as parameter and / or return a function 
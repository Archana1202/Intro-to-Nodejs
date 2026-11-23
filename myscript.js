 //document.getElementById("demo").innerHTML = "JavaScript Practice";
 
 //var firstName = 'Hello';
 //document.getElementById("demo").innerHTML=firstName;
 //document.getElementById("demo").innerHTML= 7- 2 + 4 % 10;
 num_1 = 10;
 //document.getElementById("demo").innerHTML = num_1 + 5; //output = 15
 //document.write(num_1); // output 10
 //document.getElementById("demo").innerHTML = 2 == 12; //False
 // document.getElementById("demo").innerHTML = 2 == 2; //true
 // document.getElementById("demo").innerHTML = 2 != 12; //true
 //Random Numbers

 firstname = 'Archana'
 // && and || or 
 if (firstname == 'Archana' && 4 == 4) { 
    document.getElementById("demo").innerHTML = firstname;
 }
 else if(firstname == 'Bob') { 
   document.getElementById("demo").innerHTML = 'Hello Bob!';
 } 
 else {
    document.getElementById("demo").innerHTML = 'Your name is not valid';
 }

 // For loop
 for (i=1; i <= 10; i++)
 {
    document.write('Value ' + i + "</br>");
 }

 // While loop
 var j = 0;
 while(j < 10) {
    document.write(j + ".Hello World </br>")
    j++;
 }
 //document.write("I am good")
 // window.alert

 // Fizz Buzz test 
 for (k=1; k <= 20; k++)
 {
    // If Fizzbuzz divisible by 3 & 5
    if(k % 3 == 0 && k % 5 == 0){
        document.write('FizzBuzz ' + k + "</br>");   
    }
    // If Fizzbuzz divisible only by 3
    else if (k % 3 == 0) {
      document.write('Fizz ' + k + "</br>");
    // If Fizzbuzz divisible only by 5
    } else if(k % 5 == 0){
        document.write('Buzz ' + k + "</br>");   
    }  
 }

 //Arays
 var pizztoppings = ["Onion", "Tomato", "Sweetcorn", "Paneer", "Cheese", [1,2,3,4,5]]
  for (l=0;l<pizztoppings.length;l++){
    document.write(pizztoppings[l] + "</br>"); 
     }
 document.write(pizztoppings[5][2]+"</br>"); //3 - multidimensional array

 //Objects 
 var person = {
    firstname:"Archana",
    lastname:"Jain",
 }

 document.write(person.firstname + "</br>");

 //Functions
 function hello(name) {
    return 'Hello ' + name;
 }

 var name = hello('Archana');
 document.write(name);

 //pop up window
//var yourname = prompt("Hello There pop up window test");
//document.write(yourname + "</br>");


//Web forms
function nametest() {
    var firstname = document.getElementById("name").value;
    document.getElementById("output").innerHTML = firstname;
}







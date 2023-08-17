// // <----(Chapter 6 to 9)---->
// // <----(Qno 01)---->
// document.write('Result:')
// var a='The value of a is:';
// var x='the value of a is:';

// var b=10;
// document.write ('</br>')
// var c =a+' '+b;
// document.write (c)
// document.write ('</br>')
// document.write ('.........................................');

// document.write ('</br>');
// document.write ('</br>');
// var b= ++b;
// var d = "The value of ++a is:";
// document.write(d+' '+b);
// document.write ('</br>');
// document.write('Now'+' '+ x +' '+ b );
// document.write ('</br>');
// document.write ('</br>');

// document.write ('</br>');
// document.write ('</br>');
// var d = "The value of a++ is:";
// document.write(d+' '+b);
// document.write ('</br>');
// var y = 12;
// var b = y++
// document.write('Now'+' '+ x+' '+ b );
// document.write ('</br>');
// document.write ('</br>');

// document.write ('</br>');
// document.write ('</br>');
// var b=--b;
// var d = "The value of --a is:";
// document.write(d+' '+b);
// document.write ('</br>');
// document.write('Now'+' '+ x +' '+ b );
// document.write ('</br>');
// document.write ('</br>');

// document.write ('</br>');
// document.write ('</br>');
// var b=b--;
// var d = "The value of a-- is:";
// document.write(d+' '+b);
// document.write ('</br>');
// var b = 10
// document.write('Now'+' '+ x +' '+ b );


// // <----(Chapter 6 to 9)---->
// // <----(Qno 02)---->
// var a = 2 , b= 1;
// var result = --a - --b + ++b +b--;
// // --a;

// // --a - --b;

// // --a - --b + ++b;

// // --a - --b + ++b + b--;

// document.write('a is'+' '+a);
// document.write ('</br>');
// document.write('b is'+' '+b);
// document.write ('</br>');
// document.write('result is'+' '+result);

// // <----(Chapter 6 to 9)---->
// // <----(Qno 03)---->
// var a = prompt('Enter your name');
// alert('Welcome '+ a + ' to the Page');

// // <----(Chapter 6 to 9)---->
// // <----(Qno 05)---->

// function generateTable() {
//     const numberInput = document.getElementById('numberInput');
//     const tableContainer = document.getElementById('tableContainer');
//     tableContainer.innerHTML = ''; // Clear previous content

//     let number = numberInput.value ? parseInt(numberInput.value) : 5;

//     let tableHTML = '<table>';
//     for (let i = 1; i <= 10; i++) {
//         tableHTML += '<tr><td>' + number + ' x ' + i + '</td><td>=</td><td>' + (number * i) + '</td></tr>';
//     }
//     tableHTML += '</table>';

//     tableContainer.innerHTML = tableHTML;
// }

// // Display default table on page load
// generateTable();

// // <----(Chapter 6 to 9)---->
// // <----(Qno 06)---->

// function calculateAndDisplay() {
//     const subject1Marks = parseFloat(document.getElementById('subject1').value);
//     const subject2Marks = parseFloat(document.getElementById('subject2').value);
//     const subject3Marks = parseFloat(document.getElementById('subject3').value);

//     const totalMarksPerSubject = 100;

//     const totalMarks = subject1Marks + subject2Marks + subject3Marks;
//     const percentage = (totalMarks / (totalMarksPerSubject * 3)) * 100;

//     const resultContainer = document.getElementById('resultContainer');
//     resultContainer.innerHTML = `
//         <table border="1" align="center">
//             <tr>
//                 <th>Subject</th>
//                 <th>Obtained Marks</th>
//                 <th>Total Marks</th>
//             </tr>
//             <tr align="center">
//                 <td>English</td>
//                 <td>${subject1Marks}</td>
//                 <td>${totalMarksPerSubject}</td>
//             </tr>
//             <tr align="center">
//                 <td>Maths</td>
//                 <td>${subject2Marks}</td>
//                 <td>${totalMarksPerSubject}</td>
//             </tr>
//             <tr align="center">
//                 <td>Urdu</td>
//                 <td>${subject3Marks}</td>
//                 <td>${totalMarksPerSubject}</td>
//             </tr>
//         </table>
//         <p>Total Marks: ${totalMarks}</p>
//         <p>Percentage: ${percentage.toFixed(2)}%</p>
//     `;
// }


// // <----(Chapter 9 to 11)---->
// // <----(Qno 01)---->

// var city = prompt('Enter your city')
// if(city === 'Karachi'){
//     alert('“Welcome to city of lights”')
// }

// // <----(Qno 02)---->

// var gender = prompt('Enter your gender')
// if(gender === 'male'){
//     alert('Good Morning Sir')
// }else("Good Morning ma'am")

// // <----(Qno 03)---->

// var inputColour = prompt('Enter color from the given options: Red, Yellow, Green');
// if (inputColour === 'Red') {
//     alert('Must Stop');
// } else if (inputColour === 'Yellow') {
//     alert('Ready to move');
// } else if (inputColour === 'Green') {
//     alert('Move Now');
// } else {
//     alert('Irrelevant Color');
// }

// // <----(Qno 04)---->

// var inputFuel = +prompt('Enter remaining fuel in litres');
// if(inputFuel < 0.25){
//     alert('“Please refill the fuel in your car”')
// }else{
//     alert("Enjoy your Trip")
// }

// // <----(Qno 05)---->

//part a

//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//part b

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// } else {
//     alert("The given condition is false")
// }

// //part c

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// //part d

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// //part e

// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// //part f

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// // <----(Qno 06)---->

// var subject1Marks = +prompt("Enter marks obtained in Subject 1:");
// var subject2Marks = +prompt("Enter marks obtained in Subject 2:");
// var subject3Marks = +prompt("Enter marks obtained in Subject 3:");
// var totalMarks = +prompt("Enter total marks:");


// var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
// var percentage = (totalObtainedMarks / totalMarks) * 100;

// var grade, remarks;

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70 && percentage < 80) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60 && percentage < 70) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry, you have failed";
// }
// document.write('<h1> Marks Sheet </h1>')
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + totalObtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks);

// // <----(Qno 07)---->

// var secretNumber = 5;
// inputNumber = +prompt('Guess the Number:');
// if(inputNumber === secretNumber ){
//     alert('Bingo! Correct answer')

// }else if (inputNumber + 1 === secretNumber ){
//     alert('Close enough to the correct answer.')
// }else{
//     alert('wrong no')
// }

// // <----(Qno 08)---->

// var num = +prompt('Enter the No:');
// if(num % 3 === 0){
//     alert(num +' '+"is divisible by 3.")

// }else{
//     alert(num+' '+"is not divisible by 3.")

// }

// // <----(Qno 09)---->

// var num = +prompt('Enter the No:');
// if (num % 2 === 0) {
//     alert(num +' '+' is Even No');
// } 
// else{
//     alert(num+' '+'is Odd No');
// };

// // <----(Qno 10)---->

// var temp = +prompt('Enter the Temperature: ');

// if (temp > 40) {
//     alert('It is too hot outside.');
// } else if (temp > 30 && temp <= 40) {
//     alert('The Weather today is Normal.');
// } else if (temp > 20 && temp <= 30) {
//     alert("Today’s Weather is cool.");
// } else if (temp >= 10 && temp <= 20) {
//     alert("OMG! Today's weather is so Cool.");
// }

// // <----(Qno 11)---->

// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
// var operation = prompt("Enter the operation (+, -, *, /, %):");
// var result;

// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     result = num1 / num2;
// } else if (operation === "%") {
//     result = num1 % num2;
// } else {
//     result = "Invalid operation";
// }

// alert("Result: " + result);























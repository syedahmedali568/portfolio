// var userInput = prompt('Enter a word:');
// var strLen = userInput.length;
// console.log(strLen)

// for(var i= strLen-1;i>=0;i--){
//     ultiString = (userInput[i])  
// };

// var userInput = prompt('Enter a word:');
// var strLen = userInput.length;
// for(var i = 0 ; i < strLen/2 ; i++){
//     console.log(i)
// }

var userInput = prompt('Enter your city:');
var arr = ["karachi","islamabad",'multan','lahore'];
var match = false ;

for(i=0 ; i< arr.length ; i++){
    if(userInput == arr[i]){
        match = true
        alert('City found')
        break
    }
}

if(match == false){
    alert('City not found')
};


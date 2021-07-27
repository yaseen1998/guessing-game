 'use strict'
 function falsanswer(x){
    if (x == 'n' || x=='no'){
    return 'your answer is crroect';
    }
    else{
        return 'your answer is wrong';
    }
  
}
 
function trueanswer(x){
    if (x == 'y' || x == 'yes' ){
    return 'your answer is crroect';
    }
    else{
        return 'your answer is wrong';
    }
  
}
let username = prompt ('what is your name ');
alert('I am Glad that you are here'+ username);


    let ask = prompt('1-check the Resume'+'\n'+'2-play a guessing-game'+'\n'+'please choose a number')

switch(ask){
case ('2'):alert('hello'+'\n'+'today you will play a guessing game about Yaseen Saeed'+'\n')
confirm('you can answer with y/n or yes/no')
 confirm('lets begin')

let sex = prompt(' is he a pogrammer?').toLocaleLowerCase();
console.log(sex);
 let answer = trueanswer(sex);
alert(trueanswer(sex))
// ###########################################
let famous = prompt('is he a famous?').toLocaleLowerCase();
console.log(famous)
alert(falsanswer(famous))
// ###########################################

let studie = prompt('is he an educated person?').toLocaleLowerCase();
console.log(studie)
alert(trueanswer(studie))
// ###########################################

let country = prompt ('is he live in Japan?').toLocaleLowerCase();
console.log(country)
alert(falsanswer(country))
// ###########################################
let beahive = prompt('is he a bad person?').toLocaleLowerCase();
console.log(beahive)
alert(falsanswer(beahive))

// ###########################################
let watch = prompt('is he watch anime ?').toLocaleLowerCase();
console.log(watch)
alert(trueanswer(watch))
// ###########################################
break;

case('1'):alert('you are welcom')
break;
default:
      alert('You didnt answer :');
}
alert('Thanks you to visit us '+ username);    
// for (let i = 0;i<4;i++){
// let guess_number =parseInt( prompt('please guess a number from (1-100)'));
// if(guess_number == true_number){
//     alert('choose a correct');
//     break;
// }
// while(guess_number != true_number){
//     if(guess_number < true_number){
//         alert('choose a big number');
//         break;
//     }
//     else{
//         alert('choose a small number');
// break;         
//     }
// }
// }
let true_number = Math.floor(Math.random() * 100) + 1
console.log(true_number)
let guess_number =parseInt( prompt('please guess a number from (1-100)'));

for(let i = 0;  guess_number != true_number  ; i++){
    console.log(i)

    if (i == 3){
        alert('you try 4 time game over')
        break;
    }
     else if (guess_number < true_number ){
        alert('choose a big number')
     }
        
    else{
        alert('choose a small number');
        
    }
    
     guess_number =parseInt( prompt('please guess a number from (1-100)'));

    
}
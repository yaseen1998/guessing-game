 'use strict'
 function falsanswer(x){
    if (x == 'n'){
    return 'your answer is crroect';
    }
    else{
        return 'your answer is wrong';
    }
  
}
 
function trueanswer(x){
    if (x == 'y'){
    return 'your answer is crroect';
    }
    else{
        return 'your answer is wrong';
    }
  
}


    let ask = prompt('1-check the Resume'+'\n'+'2-play a guessing-game'+'\n'+'please choose a number')

switch(ask){
case ('2'):alert('hello'+'\n'+'today you will play a guessing game about Yaseen Saeed'+'\n'+'you can answer with y/n')
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


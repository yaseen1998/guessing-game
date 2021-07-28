 'use strict'
 function falsanswer(x){
    if (x == 'n' || x=='no'){
    return ('your answer is crroect'+corr++);
    
    }
    else{
        return ('your answer is wrong'+wrong++);
        
    }
  
}
 
function trueanswer(x){
    if (x == 'y' || x == 'yes' ){
    return ('your answer is crroect'+corr++);
    }
    else{
        return ('your answer is wrong'+wrong++);
    }
  
}
let corr = 0;
let wrong = 0;
let username = prompt ('what is your name ');
alert('I am Glad that you are here : '+ username);


    let ask = prompt('1-check the Resume'+'\n'+'2-play a guessing-game'+'\n'+'please choose a number')

switch(ask){
case ('2'):alert('hello'+'\n'+'today you will play a guessing game about Yaseen Saeed'+'\n')
confirm('you can answer with y/n or yes/no')
 confirm('lets begin')

let sex = prompt(' 1-is he a pogrammer?').toLocaleLowerCase();
console.log(sex);
 let answer = trueanswer(sex);
alert(trueanswer(sex))
// ###########################################
let famous = prompt('2-is he a famous?').toLocaleLowerCase();
console.log(famous)
alert(falsanswer(famous))
// ###########################################

let studie = prompt('3-is he an educated person?').toLocaleLowerCase();
console.log(studie)
alert(trueanswer(studie))
// ###########################################

let country = prompt ('4-is he live in Japan?').toLocaleLowerCase();
console.log(country)
alert(falsanswer(country))
// ###########################################
let beahive = prompt('5-is he a bad person?').toLocaleLowerCase();
console.log(beahive)
alert(falsanswer(beahive))

// ###########################################
let watch = prompt('6-is he watch anime ?').toLocaleLowerCase();
console.log(watch)
alert(trueanswer(watch))
// ###########################################
let true_number = Math.floor(Math.random() * 50) + 1
console.log(true_number)
confirm('now we will play a guess number : are you ready')
let guess_number =parseInt( prompt('7-How many anime did he watch? (1-50)'));
console.log(corr)
console.log(wrong)
for(let i = 0;  guess_number != true_number  ; i++){
    console.log(guess_number)

    if (i == 3){
        
        alert('you try 4 time game over'+'\n'+`the coorect answer ${true_number}`)
        wrong++;
        break;
        
    }
    else if (guess_number == true_number ){
        alert(' you are a best you choose correct answer')
        corr++;
     }
        
     else if (guess_number < true_number ){
        alert('too low')
     }
        
    else{
        alert('too high');
        
    }
    
     guess_number =parseInt( prompt('7-How many anime did he watch?from(1-50)'));

    
}
confirm ('second game'+'\n'+'you have 6 attempts to guess the correct answer.')
let count = 0 

let programming = ['python','c++','javascript']
let guess_laguage = prompt('8-What programming languages does he know?'+'\n'+'[python , java , flutter , c#  , c , c++ , javascript , php').toLocaleLowerCase();
for (let i = 0;i<5;i++){
    console.log(guess_laguage)
    if (count == 2){
        alert('you are clever you guessed all the answer')
        corr++;
    break;
    }
    
    for (let r = 0;r<programming.length;r++){
        if (guess_laguage==programming[r]){
            alert('your answer is correct')
            count ++
            break;
        }else if( r==programming.length-1){
            alert('your answer is wrong')
        }
    }
    
    guess_laguage = prompt('8-What programming languages does he know?'+'\n'+'[python , java , flutter , c#  , c , c++ , javascript , php').toLocaleLowerCase();

    

}
if (count != 2){
    alert('good luck in the next time')
    wrong ++
}
alert('final mark '+'\n'+'correct answer : ' + corr + '/8'+'\n'+'wrong answer : '+(8-corr)+'/8')

break;

case('1'):alert('you are welcom')
break;
default:
      alert('You didnt answer : please refresh the page');
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

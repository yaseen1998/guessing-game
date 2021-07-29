 'use strict'
  // this code for strech goal abbreviate the code for the yes or no question in one function and one call with array the call in line 23
//     function yes_no(ask,answ){
//  let dra = []
//    for (let i = 0;i<ask.length;i++){
//     if(answ[i]=='y'){
//         dra.push('yes');
//     }
//       else{
//           dra.push('no')
//       }
     
//      let ans = prompt(ask[i]).toLocaleLowerCase();
//      console.log(ans);
//      if(ans==answ[i] || ans==dra[i]){
//     alert ('your answer is crroect');
//     }
//     else{
//         alert ('your answer is wrong');
//     }
//      }
//  }
//yes_no([' 1-is he a pogrammer?','2-is he a famous?','3-is he an educated person?','4-is he live in Japan?','5-is he a bad person?','6-is he watch anime ?'],['y','n','y','n','n','y'])
 
 //____________________________________________
 function falsanswer(x){
    if (x == 'n' || x=='no'){
    return ('your answer is crroect'+corr++);
    
    }
    else{
        return ('your answer is wrong'+wrong++);
        
    }
  
}
 //____________________________________________
function trueanswer(x){
    if (x == 'y' || x == 'yes' ){
    return ('your answer is crroect'+corr++);
    }
    else{
        return ('your answer is wrong'+wrong++);
    }
  
}
 
 function question_programmer (ask){
    let ans = prompt(ask).toLocaleLowerCase();
    console.log(ans);
    return trueanswer(ans)
}
//____________________________________________
function question_famous (ask){
    let ans = prompt(ask).toLocaleLowerCase();
    console.log(ans);
    return (falsanswer(ans))
}
//____________________________________________
function question_educated (ask){
    let ans = prompt(ask).toLocaleLowerCase();
    console.log(ans);
    return (trueanswer(ans))
}
//____________________________________________
function question_live (ask){
    let ans = prompt(ask).toLocaleLowerCase();
    console.log(ans);
    return (falsanswer(ans))
}
//____________________________________________
function question_person (ask){
    let ans = prompt(ask).toLocaleLowerCase();
    console.log(ans);
    return (falsanswer(ans))
}
//____________________________________________
function question_watch (ask){
    let ans = prompt(ask).toLocaleLowerCase();
    console.log(ans);
    return (trueanswer(ans))
}

//____________________________________________
function question_guess_number(gu,tray_number){
    let true_number = Math.floor(Math.random() * 50) + 1
    console.log(true_number)
    confirm('now we will play a guess number : are you ready')
    let guess_number =parseInt( prompt(gu));
    console.log(corr)
    console.log(wrong)
    for(let i = 0;  guess_number != true_number  ; i++){
        console.log(guess_number)
    
        if (i == tray_number){
            
            alert('you try '+ tray_number+'time game over'+'\n'+`the coorect answer ${true_number}`)
            wrong++;
            break;
            
        }
       
            
         else if (guess_number < true_number ){
            alert('too low')
         }
            
        else{
            alert('too high');
            
        }
        
         guess_number =parseInt( prompt(gu));
        
    }
    if (guess_number == true_number ){
        alert(' you are a best you choose correct answer')
        corr++;
     }
}
//____________________________________________
function question_guess_word(programming,number_tray){
    confirm ('second game'+'\n'+'you have 6 attempts to guess the correct answer.')
let count = 0 


let guess_laguage = prompt('8-What programming languages does he know?'+'\n'+'[python , java , flutter , c#  , c , c++ , javascript , php').toLocaleLowerCase();
for (let i = 0;i<number_tray-1;i++){
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


}
//____________________________________________
// ######################################################################
let corr = 0;
let wrong = 0;
let username = prompt ('what is your name ');
alert('I am Glad that you are here : '+ username);


    let ask = prompt('1-check the Resume'+'\n'+'2-play a guessing-game'+'\n'+'please choose a number')

switch(ask){
case ('2'):alert('hello'+'\n'+'today you will play a guessing game about Yaseen Saeed'+'\n')
confirm('you can answer with y/n or yes/no')
 confirm('lets begin')


alert(question_programmer(' 1-is he a pogrammer?'));
// ###########################################
alert(question_famous('2-is he a famous?'));
// ###########################################
alert(question_educated('3-is he an educated person?'));
// ###########################################
alert(question_live('4-is he live in Japan?'))
// ###########################################
alert(question_person('5-is he a bad person?'))
// ###########################################
alert(question_watch('6-is he watch anime ?'))
// ###########################################
let number = question_guess_number('7-How many anime did he watch? (1-50)',4);
// ###########################################
let word = question_guess_word( ['python','c++','javascript'],6)
// ###########################################
break;
case('1'):alert('you are welcom')
break;
default:
      alert('You didnt answer : please refresh the page');
}
alert('Thanks you to visit us '+ username);    

//____________________________________________
// ######################################################################
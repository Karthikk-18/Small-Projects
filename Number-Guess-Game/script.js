const min = 1;
const max = 100;
const ans = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Enter a number between ${min} and ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Enter a valid Number");
    }else if(guess < min || guess > max){
        window.alert("Enter a number between valid range");
    }else{
        attempts++;
        if(guess < ans){
            window.alert("Too LOW ! Try Again");
        }else if(guess > ans){
            window.alert("Too HIGH ! Try Again");
        }else{
            window.alert(`Congratulations Your guess is correct and you cracked it in ${attempts} attempts`);
            running = false;
        }
    }
}
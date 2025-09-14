const textbox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const submit = document.getElementById("submit");
let temp;

submit.onclick = function(){
   if(toFahrenheit.checked){
     temp = Number(textbox.value);
     temp = temp * 9/5 + 32;
     result.textContent = temp + "°F";
   }else if(toCelsius.checked){
     temp = Number(textbox.value);
     temp = (temp - 32) * (5/9);
     result.textContent = temp + "°C";
   }else{
    result.textContent = "Select an unit";
   }
}
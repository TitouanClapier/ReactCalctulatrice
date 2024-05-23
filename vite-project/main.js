import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const app = document.querySelector("#app");
const input = document.createElement("input");
input.setAttribute("type", "text");
app.appendChild(input);

const buttons = [
    "%", "√", "²", "C", "^", "(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "⌫", "0", ".", "="
];

buttons.forEach(btnText => {
    const button = document.createElement("button");
    button.textContent = btnText;
    button.addEventListener("click", () => {
        if (btnText === "=") {
          const [base, exponent] = input.value.split("^");
          if (base && exponent) {
              input.value = Math.pow(parseFloat(base), parseFloat(exponent));
          } else {
              input.value = eval(input.value);
          }
        } else if (btnText === "√") {
          input.value = Math.sqrt(parseFloat(input.value));
        } else if (btnText === "C"){
            input.value = "";
        } else if (btnText === "²"){
            input.value += "**2";
        } else if (btnText === "⌫"){
            input.value = input.value.slice(0, -1);
        } else if (btnText === "%") {
            input.value = parseFloat(input.value) / 100;
        } else {
            input.value += btnText;
        }
        
    });
    app.appendChild(button);
});
const mainCalc = document.querySelector('.main-cal');

const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = `
Calculator in JavaScript
`
document.querySelector('.main-cal').prepend(h1);

const calc = document.createElement('div');
calc.classList.add('calc');

calc.innerHTML = `
    <input type="text" class="calc-display" id="display" placeholder="0" disabled>
    <div class="calc-buttons">
        <button value="7" onclick="form1.answer.value += '7' ">7</button>
        <button value="8" onclick="form1.answer.value += '8' ">8</button>
        <button value="9" onclick="form1.answer.value += '9' ">9</button>
        <button value="/" onclick="form1.answer.value += '/' ">/</button>
        <button value="4" onclick="form1.answer.value += '4' ">4</button>
        <button value="5" onclick="form1.answer.value += '5' ">5</button>
        <button value="6" onclick="form1.answer.value += '6' ">6</button>
        <button value="*" onclick="form1.answer.value += '*' ">*</button>
        <button value="1" onclick="form1.answer.value += '1' ">1</button>
        <button value="2" onclick="form1.answer.value += '2' ">2</button>
        <button value="3" onclick="form1.answer.value += '3' ">3</button>
        <button value="-" onclick="form1.answer.value += '-' ">-</button>
        <button value="0" onclick="form1.answer.value += '0' " class = 'zero'>0</button>
        <button value="." onclick="form1.answer.value += '.' ">.</button>
        <button value="+" onclick="form1.answer.value += '+'">+</button>
        <button value="=" onclick="form1.answer.value = eval(form1.answer.value) ">=</button>
        <button value="C" onclick="form1.answe.value = " " " id="clear">C</button>
    </div>
`;

mainCalc.appendChild(calc);
const display = document.getElementById('display');

document.querySelector('.calc-buttons').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const value = e.target.value;

        if (value === '=') {
            try {
                display.value = eval(display.value) || "0"; 
            } catch {
                display.value = "Error";
            }
        } else if (value === 'C') {
            display.value = ''; // очистить 
        } else {
            display.value += value; 
        }
    }
});
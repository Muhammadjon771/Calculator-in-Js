const mainCalc = document.querySelector('.main-cal');

const calc = document.createElement('div');
calc.classList.add('calc');

calc.innerHTML = `
    <input type="number" class="calc-display" placeholder="0" disabled>
    <div class="calc-buttons">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>/</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>x</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button class = 'zero'>0</button>
        <button>.</button>
        <button>+</button>
        <button>=</button>
    </div>
`;

mainCalc.appendChild(calc);


let inputNumber = document.getElementById('calculation');
let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');

    let counterFP = 0;
    let counterSP = 0;

// FUNÇÃO DOS NUMEROS
function functionRepeat(number) {
    number.addEventListener("click", function () {
        inputNumber.value += number.innerText;
    });
};

const numberArray = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine
];

for (let i in numberArray) {
    functionRepeat(numberArray[i]);
};


// BOTÃO CLEAR
function clearFunction() {
    inputNumber.value = "";
    counterFP = 0;
    counterSP = 0;
};
let clear = document.getElementById('clear');
clear.addEventListener('click', clearFunction);



// BOTÃO APAGAR 
function eraseLetter() {
    let newValue = inputNumber.value;

    if (newValue.length > 0) {
        inputNumber.value = newValue.slice(0, -1);
    }

};
let erase = document.getElementById('eraser');
erase.addEventListener('click', eraseLetter);


// FUNÇÃO NEGATIVO/POSITIVO
function negativeNumber() {
    let currentValue = inputNumber.value;
    let negative = "(-";
    let newValue = negative + currentValue;
    if (inputNumber.value.includes(negative) == true) {
        inputNumber.value = currentValue.replace("(-", "");
    } else {
        inputNumber.value = newValue;
    }
};

let negativeBttn = document.getElementById("negative");
negativeBttn.addEventListener('click', negativeNumber);

// VIRGULA
function comma() {
    let currentValue = inputNumber.value;
    let comma = ",";
    let newValue = currentValue + comma;
    let zeroValue = "0" + comma;
    if (inputNumber.value.includes(",") == false && inputNumber.value != "") {
        inputNumber.value = newValue;
    } else if (inputNumber.value.includes(",") == false && inputNumber.value.includes("") == true) {
        inputNumber.value = zeroValue;
    }
};

let commaBttn = document.getElementById('comma');
commaBttn.addEventListener('click', comma);

// PARENTESES
function parentheses() {
    let firstP = "(";
    let secondP = ")";
    let currentValue = inputNumber.value;
    let verifyFP = /\(/g;
    let verifyNumber = /(\()(\-)?([0-9]{1,}(\-?\+?\⨉?\÷?))?([0-9]{1,}$)/g;
    let verifySP = /\)$/g;

    if (verifyFP.test(currentValue) == false){
        inputNumber.value += firstP;
    // } else if (verifyNumber.test(currentValue) == false){
    //     inputNumber.value += firstP;
    } else if (verifyNumber.test(currentValue) == true){
        inputNumber.value += secondP;
    } else if (verifySP.test(currentValue) == true) {
        inputNumber.value += "⨉" + firstP;
    };

}

let parenthesesBttn = document.getElementById('parentheses');
parenthesesBttn.addEventListener('click', parentheses)


// OPERADORES PRINCIPAIS
function verifyLastNumber(string) {
    for (let i = 0; i < string.length; i++) {
        const character = string[i];
        if (!isNaN(character)) {
            return true;
        }
    }
    return false;
};


// MAIS

function numbersSum() {
    let plus = "+";
    let currentValue = inputNumber.value;
    let lastLetter = currentValue.charAt(currentValue.length - 1);
    if (lastLetter != "+" && verifyLastNumber(currentValue) == true) {
        inputNumber.value += plus;
    };
};

let plusSignal = document.getElementById('plus');
plusSignal.addEventListener('click', numbersSum);

// MENOS

function numbersSub() {
    let minus = "-";
    let currentValue = inputNumber.value;
    let lastLetter = currentValue.charAt(currentValue.length - 1);
    if (lastLetter != "-" && verifyLastNumber(currentValue) == true) {
        inputNumber.value += minus;
    };
};

let minusSignal = document.getElementById('minus');
minusSignal.addEventListener('click', numbersSub);

// MULTIPLICAÇÃO

function numbersMultiply() {
    let multiplication = "⨉";
    let currentValue = inputNumber.value;
    let lastLetter = currentValue.charAt(currentValue.length - 1);
    if (lastLetter != "⨉" && verifyLastNumber(currentValue) == true) {
        inputNumber.value += multiplication;
    };
};

let multiplySignal = document.getElementById('multiply');
multiplySignal.addEventListener('click', numbersMultiply);

// DIVISÃO

function numbersDiv() {
    let division = "÷"
    let currentValue = inputNumber.value;
    let lastLetter = currentValue.charAt(currentValue.length - 1);
    if (lastLetter != "÷" && verifyLastNumber(currentValue) == true) {
        inputNumber.value += division;
    };
};

let divSignal = document.getElementById('division');
divSignal.addEventListener('click', numbersDiv);

// RESTO 
function numbersPercentage() {
    let percentage = "%"
    let currentValue = inputNumber.value;
    let lastLetter = currentValue.charAt(currentValue.length - 1);
    if (lastLetter != "%" && verifyLastNumber(currentValue) == true) {
        if (lastLetter != "⨉") {
            inputNumber.value += percentage;
            inputNumber.value += "⨉";
        }
    };
};

let restSignal = document.getElementById('percentage');
restSignal.addEventListener("click", numbersPercentage);
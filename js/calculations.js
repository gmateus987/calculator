let equal = document.getElementById('equal');
let myInput = document.getElementById('calculation');
let preResult = document.getElementById('operation-preview');

function resultPreview() {
    alert("Funcionou")
};

let result = myInput.value;

function calculate() {
    let newValue = myInput.value;

    newValue = newValue.replace("⨉", "*");
    newValue = newValue.replace("÷", "/");
    newValue = newValue.replace(",", ".");

    let startNegative = /(^\-)/g

    if (startNegative.test(newValue) == true) {
        newValue = newValue.replace(/(^\-)/g, "")
        if (newValue.includes("-") == true) {
            let split = newValue.split("-");
             let firstresult = parseFloat(split[0]) * -1 
             let secondresult = firstresult - parseFloat(split[1]);
             result = secondresult
        } else if (newValue.includes("+") == true) {
            let split = newValue.split("+");
            result = parseFloat(split[0] * -1) + parseFloat(split[1]);
        } else if (newValue.includes("*") == true) {
            if (newValue.includes("%") == true) {
                let split = newValue.split("%*");
                let firstresult = parseFloat(split[0]) / 100;
                let secondresult = firstresult * parseFloat(split[1]);
                result = secondresult
            } else {
                let split = newValue.split("*");
                result = parseFloat(split[0] * -1) * parseFloat(split[1]);
            };
        } else if (newValue.includes("/") == true) {
            let split = newValue.split("/");
            result = parseFloat(split[0] * -1) / parseFloat(split[1]);
        };
    } else {

        if (newValue.includes("-") == true) {
            let split = newValue.split("-");
            result = parseFloat(split[0]) - parseFloat(split[1]);
        } else if (newValue.includes("+") == true) {
            let split = newValue.split("+");
            result = parseFloat(split[0]) + parseFloat(split[1]);
        } else if (newValue.includes("*") == true) {
            if (newValue.includes("%") == true) {
                let split = newValue.split("%*");
                let firstresult = parseFloat(split[0]) / 100;
                let secondresult = firstresult * parseFloat(split[1]);
                result = secondresult
            } else {
                let split = newValue.split("*");
                result = parseFloat(split[0]) * parseFloat(split[1]);
            };
        } else if (newValue.includes("/") == true) {
            let split = newValue.split("/");
            result = parseFloat(split[0]) / parseFloat(split[1]);
        };
    }

    myInput.value = result;
    myInput.value = myInput.value.replace(".", ",");
    preResult.value = myInput.value
};



equal.addEventListener('click', calculate)
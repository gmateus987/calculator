let equal = document.getElementById('equal');
let myInput = document.getElementById('calculation');
let preResult = document.getElementById('operation-preview');

function resultPreview() {
    alert("Funcionou")
};


function calculate() {
    let newValue = myInput.value;
    newValue = newValue.replace("-", "-");
    newValue = newValue.replace("+", "+");
    newValue = newValue.replace("⨉", "*");
    newValue = newValue.replace("÷", "/");
    newValue = newValue.replace("%", "/100");

    
    let result =
    myInput.value = result;
};

equal.addEventListener('click', calculate)
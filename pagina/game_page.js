function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    resposta = parseInt(number1) * parseInt(number2);
    document.getElementById("io").innerHTML = number1;
    document.getElementById("io1").innerHTML = number2;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
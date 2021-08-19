function compute() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var yearFinal = new Date().getFullYear() + years;
    document.getElementById("result").innerHTML = "If you deposit " + principal + ",<br/>" +
        "at an interest rate of " + rate + "%,<br/>" +
        "You will receive an amount of " + interest + ",<br/> " +
        "in the year " + yearFinal + "";
}


function validacaoValor() {
    var principal = document.getElementById("principal").value;
    if (parseInt(principal) <= 0) {
        alert("Valor Zero ou Negativo, entrar com valor Positivo");
        document.getElementById("principal").focus();
    }
}
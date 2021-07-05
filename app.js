function calcular() {
    var inputReal = document.getElementById('real').value;
    var selectMoeda = document.getElementById('moeda');
    var option = selectMoeda.options[selectMoeda.selectedIndex].value;
    if (option == 0) {
        alert("Por favor, selecione uma moeda");
    } else {

    var element = document.getElementById('h1Resultado');
    var moedas = ["dol", "euro", "peso", "yene", "wonsulcor"]
    var precos = [5.08, 6.03, 0.053, 0.046, 0.0045]
    var simbolos = ["$", "€", "$", "¥", "₩"]

    var resDolar = inputReal / precos[moedas.indexOf(option)];
    element.innerHTML = `${simbolos[moedas.indexOf(option)]} ${resDolar.toFixed(2)}`;
    }
}
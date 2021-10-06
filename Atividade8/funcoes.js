function Pesquisa(){
    var medIdade = 0;
    var idadeMax;
    var idadeMin;
    var qtdPessimo = 0;
    var porcentagemBomOtimo = 0;
    var feminino = 0;
    var masculino = 0;

    var idade = Array(45);
    var sexo = Array(45);
    var opiniao = Array(45);
    
    for (var i = 0; i < idade.length; i++){
        idade[i] = prompt("Informe a idade da pessoa " + (i + 1));
        sexo[i] = prompt("Informe o sexo (M ou F) da pessoa " + (i + 1));
        opiniao[i] = prompt("Dê uma nota de 1 a 4 ao filme (1- Péssimo / 2- Regular / 3- Bom / 4- Ótimo)");

        idade[i] = parseFloat(idade[i]);
        sexo[i] = sexo[i].toUpperCase();
        opiniao[i] = parseFloat(opiniao[i]);
    }

    for (var i = 0; i < idade.length; i++){
        medIdade += idade[i];

        if (opiniao[i] == 1){
            qtdPessimo++;
        } else if (opiniao[i] == 3 || opiniao[i] == 4){
            porcentagemBomOtimo++;
        }

        if (sexo[i] == 'F'){
            feminino++;
        } else if (sexo[i] == 'M'){
            masculino++;
        }
    }

    medIdade /= idade.length;
    idadeMax = Math.max.apply(Math, idade);
    idadeMin = Math.min.apply(Math, idade);
    porcentagemBomOtimo = (porcentagemBomOtimo / idade.length) * 100;

    alert("Média Idade: " + medIdade.toFixed(2) + "\nIdade da pessoa mais velha: " + idadeMax + "\nIdade da pessoa mais nova: " + idadeMin + "\n" + qtdPessimo 
    + " Pessoas responderam Péssimo\n" + porcentagemBomOtimo.toFixed(2) + "% das pessoa escolheram Ótimo/Bom\n" + feminino + " Mulheres | " + masculino + " Homens");
}
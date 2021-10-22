function Aluno(){
    let escolha;
    var radios = document.getElementsByName("Aluno");
    var stringona;
    var vRA;
    var vNome;

    for (var i = 0; i < radios.length; i++){
        if (radios[i].checked == true){
            escolha = radios[i].value;
        }
    }

    vRA = prompt("Informe o RA do Aluno");
    vNome = prompt("Informe o Nome do Aluno");

    escolha = parseFloat(escolha);

    switch (escolha){
        case 1:
            var Aluno1 = new Object();
            Aluno1.RA = vRA;
            Aluno1.Nome = vNome;
            break;
        case 2:
            var Aluno1 = {};
            Aluno1.RA = vRA;
            Aluno1.Nome = vNome;
            break;
        case 3:
            var Aluno1 = {
                RA: vRA,
                Nome: vNome
            };
            break;
    }
    
    stringona = "O Aluno " + Aluno1.Nome + " possui o RA: " + Aluno1.RA;
    alert(stringona);
}
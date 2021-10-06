function Maior(){
    var num = Array(3);
    var copiaNum = Array(3);

    for (var i = 0; i < num.length; i++){
        num[i] = prompt("Informe o valor " + (i + 1));

        num[i] = parseFloat(num[i]);
    }

    alert("O maior valor é " + Math.max.apply(Math, num));
}

function Crescente(){
    var num = Array(3);
    var copiaNum = Array(3);

    for (var i = 0; i < num.length; i++){
        num[i] = prompt("Informe o valor " + (i + 1));

        num[i] = parseFloat(num[i]);
    }

    if (num[0] >= num[1] && num[0] >= num[2]){
        if(num[1] >= num[2]){
            copiaNum[0] = num[2];
            copiaNum[1] = num[1];
            copiaNum[2] = num[0];
        } else{
            copiaNum[0] = num[1];
            copiaNum[1] = num[2];
            copiaNum[2] = num[0];
        }
    } else if (num[0] >= num[1]){
        copiaNum[0] = num[1]; 
        copiaNum[1] = num[0];
        copiaNum[2] = num[2];
    } else if (num[0] >= num[2]){
        copiaNum[0] = num[2];
        copiaNum[1] = num[0];
        copiaNum[2] = num[1];
    } else{
        if (num[1] >= num[2]){
            copiaNum[0] = num[0];
            copiaNum[1] = num[2];
            copiaNum[2] = num[1];
        } else{
            copiaNum[0] = num[0];
            copiaNum[1] = num[1];
            copiaNum[2] = num[2];
        }
    }

    alert(copiaNum[0] + " - " + copiaNum[1] + " - " + copiaNum[2]);
}
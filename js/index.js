var QuantBarra;
function PegarValor(){
    QuantBarra = document.getElementById("QuantBarra").value;
    GerarGráfico();
}

function GerarGráfico(){
    if(QuantBarra <=50)
    {
    document.getElementById("body").innerHTML =""; 
    for(i = 1; i <= QuantBarra ; i++)
    {
        document.getElementById("body").innerHTML += '<div class="barra"><div class="redondo r' + i + '"></div><div class="cilindro c' + i + '"></div></div>'
    }
    GerarInput();
    }
    else
    {
        document.getElementById("body").innerHTML ="";
        document.getElementById("inputs").innerHTML = "";  
    }
}

function GerarInput(){
    document.getElementById("inputs").innerHTML = ""; 
    for(i = 1; i <= QuantBarra; i++)
    {
    document.getElementById("inputs").innerHTML += '<div><label>Informe o valor para a ' + i + 'ª barra: </label><input type="number" id="inp' + i + '" onchange="Calcular()" /></div><br />';
    }
}
var porcentagem;
function Calcular(){
    for(i = 1; i <= QuantBarra; i++)
    {  
        porcentagem = document.getElementById("inp" + i).value;
        if(porcentagem <= 100 && porcentagem >= 0){
            porcentagem *= 5; 
            document.querySelector(".cilindro" + ".c" + i).style.width = porcentagem + "px";
            porcentagem -= 20;
            document.querySelector(".redondo" + ".r" + i).style.marginLeft = porcentagem + "px";
        }
    }
}


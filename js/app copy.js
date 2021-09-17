function init(){
    var span1 = document.getElementById("spUno");
    span1.innerHTML = "Nuevo texto para el span";
    document.getElementById("p1").innerHTML = "algun texto de relleno";
}

function fnSumar(){
    var num1 = parseInt(document.getElementById("txtNumero1").value);
    var num2 = parseInt(document.getElementById("txtNumero2").value);

    console.log("tipo de num1: ", typeof(num1));
    console.log("tipo de num2: ", typeof(num2));

    document.getElementById("txtResultado").value = num1 + num2;

    console.log("tipo de num1 + num2: ", typeof(num1 + num2));
}

function fnMultiplicar(){
    var num1 = parseInt(document.getElementById("txtNumero1").value);
    var num2 = parseInt(document.getElementById("txtNumero2").value);
    document.getElementById("txtResultado").value = num1 * num2;
}

var fnReset = function(){
    var elementos = document.getElementsByClassName("numero");
    /*for(let i=0; i<elementos.length; i++){
        elementos[i].value = "0";
    }*/
    for(let elem of elementos){
        elem.value = "0";
    }
}

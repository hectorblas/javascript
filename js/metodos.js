// variables
var valor1=0;
var valor2;

var operacion;
//eventos para los numeros
document.getElementById("0").addEventListener('click', cero, false);
document.getElementById("1").addEventListener('click', uno, false);
document.getElementById("2").addEventListener('click', dos, false);
document.getElementById("3").addEventListener('click', tres, false);
document.getElementById("4").addEventListener('click', cuatro, false);
document.getElementById("5").addEventListener('click', cinco, false);
document.getElementById("6").addEventListener('click', seis, false);
document.getElementById("7").addEventListener('click', siete, false);
document.getElementById("8").addEventListener('click', ocho, false);
document.getElementById("9").addEventListener('click', nueve, false);
//punto
document.getElementById("punto").addEventListener('click', coma, false);
//borrar
document.getElementById("on").addEventListener('click', borrar, false);
//SIGNOS
document.getElementById("sign").addEventListener('click', signo, false);
//operaciones
document.getElementById("mas").addEventListener('click',suma, false);
document.getElementById("menos").addEventListener('click',resta, false);
document.getElementById("por").addEventListener('click',multiplicacion, false);
document.getElementById("dividido").addEventListener('click',division, false);
//resultado
document.getElementById("igual").addEventListener('click',resultado, false);
//funcion para el evento mouse
document.getElementById('0').onmousedown=cero1;
document.getElementById('0').onmouseup=cero2;
document.getElementById('1').onmousedown=uno1;
document.getElementById('1').onmouseup=uno2;
document.getElementById('2').onmousedown=dos1;
document.getElementById('2').onmouseup=dos2;
document.getElementById('3').onmousedown=tres1;
document.getElementById('3').onmouseup=tres2;
document.getElementById('4').onmousedown=cuatro1;
document.getElementById('4').onmouseup=cuatro2;
document.getElementById('5').onmousedown=cinco1;
document.getElementById('5').onmouseup=cinco2;
document.getElementById('6').onmousedown=seis1;
document.getElementById('6').onmouseup=seis2;
document.getElementById('7').onmousedown=siete1;
document.getElementById('7').onmouseup=siete2;
document.getElementById('8').onmousedown=ocho1;
document.getElementById('8').onmouseup=ocho2;
document.getElementById('9').onmousedown=nueve1;
document.getElementById('9').onmouseup=nueve2;
document.getElementById('on').onmousedown=on1;
document.getElementById('on').onmouseup=on2;
document.getElementById('punto').onmousedown=punto1;
document.getElementById('punto').onmouseup=punto2;
document.getElementById('sign').onmousedown=sign1;
document.getElementById('sign').onmouseup=sign2;
document.getElementById('mas').onmousedown=mas1;
document.getElementById('mas').onmouseup=mas2;
document.getElementById('menos').onmousedown=menos1;
document.getElementById('menos').onmouseup=menos2;
document.getElementById('por').onmousedown=por1;
document.getElementById('por').onmouseup=por2;
document.getElementById('dividido').onmousedown=dividido1;
document.getElementById('dividido').onmouseup=dividido2;
document.getElementById('raiz').onmousedown=raiz1;
document.getElementById('raiz').onmouseup=raiz2;
document.getElementById('igual').onmousedown=igual1;
document.getElementById('igual').onmouseup=igual2;

//funcion para tamaño de los bototones

function cero1() {
  document.getElementById("0").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function cero2() {
  document.getElementById("0").style="none";
}
function uno1() {
  document.getElementById("1").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function uno2() {
  document.getElementById("1").style="none";
}
function dos1() {
  document.getElementById("2").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function dos2() {
  document.getElementById("2").style="none";
}
function tres1() {
  document.getElementById("3").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function tres2() {
  document.getElementById("3").style="none";
}
function cuatro1() {
  document.getElementById("4").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function cuatro2() {
  document.getElementById("4").style="none";
}
function cinco1() {
  document.getElementById("5").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function cinco2() {
  document.getElementById("5").style="none";
}
function seis1() {
  document.getElementById("6").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function seis2() {
  document.getElementById("6").style="none";
}
function siete1() {
  document.getElementById("7").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function siete2() {
  document.getElementById("7").style="none";
}
function ocho1() {
  document.getElementById("8").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function ocho2() {
  document.getElementById("8").style="none";
}
function nueve1() {
  document.getElementById("9").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function nueve2() {
  document.getElementById("9").style="none";
}
function on1() {
  document.getElementById("on").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function on2() {
  document.getElementById("on").style="none";
}
function punto1() {
  document.getElementById("punto").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function punto2() {
  document.getElementById("punto").style="none";
}
function sign1() {
  document.getElementById("sign").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function sign2() {
  document.getElementById("sign").style="none";
}
function mas1() {
  document.getElementById("mas").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function mas2() {
  document.getElementById("mas").style="none";
}
function menos1() {
  document.getElementById("menos").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function menos2() {
  document.getElementById("menos").style="none";
}
function por1() {
  document.getElementById("por").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function por2() {
  document.getElementById("por").style="none";
}
function dividido1() {
  document.getElementById("dividido").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function dividido2() {
  document.getElementById("dividido").style="none";
}
function igual1() {
  document.getElementById("igual").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function igual2() {
  document.getElementById("igual").style="none";
}
function raiz1() {
  document.getElementById("raiz").style="filter:drop-shadow(0 0 7px #26C5F0);transform:scale(0.95)";
}
function raiz2() {
  document.getElementById("raiz").style="none";
}

//funcion para poner los numeros
function cero() {

    valor=document.getElementById("display").innerHTML;
    if (valor=="0"){
        document.getElementById("display").innerHTML ="0";
    }else{
    document.getElementById("display").innerHTML =valor+"0";
    }
    validar();
    }
function uno() {
    valor=document.getElementById("display").innerHTML;
    if (valor=="0"){
        document.getElementById("display").innerHTML ="1";
    }else {
    document.getElementById("display").innerHTML =valor+"1";
    }
    validar();
    }
function dos() {
  valor=document.getElementById("display").innerHTML;
  if (valor=="0") {
    document.getElementById("display").innerHTML ="2";
  }else{
    document.getElementById("display").innerHTML =valor+"2";
  }
  validar();
}
function tres() {
valor=document.getElementById("display").innerHTML;
if (valor=="0") {
  document.getElementById("display").innerHTML ="3";
}else{
  document.getElementById("display").innerHTML =valor+"3";
}
validar();
}
function cuatro() {
  valor=document.getElementById("display").innerHTML;
  if (valor=="0") {
  document.getElementById("display").innerHTML ="4";
}else{
  document.getElementById("display").innerHTML =valor+"4";
  }
validar();
}
function cinco() {
  valor=document.getElementById("display").innerHTML;
  if (valor=="0") {
  document.getElementById("display").innerHTML ="5";
}else{
  document.getElementById("display").innerHTML =valor+"5";
}
validar();
}
function seis() {
  valor=document.getElementById("display").innerHTML;
  if (valor=="0") {
  document.getElementById("display").innerHTML ="6";
}else{
  document.getElementById("display").innerHTML =valor+"6";
}
validar();
}
function siete() {
  valor=document.getElementById("display").innerHTML;
  if (valor=="0") {
  document.getElementById("display").innerHTML ="7";
}else{
  document.getElementById("display").innerHTML =valor+"7";
}
validar();
}
function ocho() {
  valor=document.getElementById("display").innerHTML;
  if (valor=="0") {
  document.getElementById("display").innerHTML="8";
}else{
  document.getElementById("display").innerHTML =valor+"8";
}
validar();
}

function nueve() {
  valor=document.getElementById("display").innerHTML;
  if (valor=="0") {
  document.getElementById("display").innerHTML ="9";
}else{
  document.getElementById("display").innerHTML =valor+"9";
}
validar();
}
//funcion borrar
function borrar() {
  document.getElementById("display").innerHTML ="0";
}
//funcion para poner el punto
function coma() {
  valor=document.getElementById("display").innerHTML;
  for (var i = 0; i < valor.length; i++) {
    if (valor.charAt(i)==".") {
        document.getElementById("display").innerHTML =valor;
        break;
    }else
    document.getElementById("display").innerHTML = valor+".";
  }
}
//funcion para cambiar el digno
function signo() {
    valor=document.getElementById("display").innerHTML;
    var nuevosigno=parseFloat(-1*valor);
    document.getElementById("display").innerHTML = nuevosigno;
}
//funcion para las operacion matematicas
function suma() {
  valors=document.getElementById("display").innerHTML;
  if (valors=="") {
    valors=0;
    valor1=valor1+valors;
  }else
    valor1=parseFloat(valor1)+parseFloat(valors);
    operacion="+"
    document.getElementById("display").innerHTML="";
}

function resta() {
  valors=document.getElementById("display").innerHTML;
  if (valors=="") {
    valors=0;
    valor1=valor1+valors;
  }else
  valor1=parseFloat(valor1)+parseFloat(valors);
  operacion="-"
  document.getElementById("display").innerHTML="";
}
function multiplicacion() {
  valors=document.getElementById("display").innerHTML;
  if (valors=="") {
    valors=0;
    valor1=valor1+valors;
  }else
  valor1=parseFloat(valor1)+parseFloat(valors);
  operacion="*"
  document.getElementById("display").innerHTML="";
}

function division() {
  valors=document.getElementById("display").innerHTML;
  if (valors=="") {
    valors=0;
    valor1=valor1+valors;
  }else
  valor1=parseFloat(valor1)+parseFloat(valors);
  operacion="/"
  document.getElementById("display").innerHTML="";
}
//funcion para mostrar el resultado
function resultado() {
  valor2=document.getElementById("display").innerHTML;
  resolver();
}
// funcion para el calculo de resultado
function resolver() {
  switch (operacion) {
    case "+":
      var res=valor1+parseFloat(valor2);
      document.getElementById("display").innerHTML=res;
      validar();
      break;
      case "-":
        var res=valor1-parseFloat(valor2);
        document.getElementById("display").innerHTML=res;
        validar();
        break;
      case "*":
        var res=valor1*parseFloat(valor2);
        document.getElementById("display").innerHTML=res;
        validar();
        break;
      case "/":
        var res=valor1/parseFloat(valor2);
        document.getElementById("display").innerHTML=res;
        validar();
      break;
  }
      valor1="0";
      valor2="0"
      operacion="";
}

//funcion para validar ocho digitos incluido el signo-
function validar() {
  valor=document.getElementById("display").innerHTML;
  valor2=valor.substr(0,8);
  document.getElementById("display").innerHTML=valor2;
}

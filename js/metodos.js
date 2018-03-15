// variables
var valor1;
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
  valor1=document.getElementById("display").innerHTML;
  operacion="+"
  document.getElementById("display").innerHTML="";
}

function resta() {
  valor1=document.getElementById("display").innerHTML;
  operacion="-"
  document.getElementById("display").innerHTML="";
}

function multiplicacion() {
  valor1=document.getElementById("display").innerHTML;
  operacion="*"
  document.getElementById("display").innerHTML="";
}

function division() {
  valor1=document.getElementById("display").innerHTML;
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
      var res=parseFloat(valor1)+parseFloat(valor2);
      document.getElementById("display").innerHTML=res;
      validar();
      break;
      case "-":
        var res=parseFloat(valor1)-parseFloat(valor2);
        document.getElementById("display").innerHTML=res;
        validar();
        break;
      case "*":
        var res=parseFloat(valor1)*parseFloat(valor2);
        document.getElementById("display").innerHTML=res;
        validar();
        break;
      case "/":
        var res=parseFloat(valor1)/parseFloat(valor2);
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

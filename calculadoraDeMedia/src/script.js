 


function clicar(){
  
  var nomeInserido = document.getElementById("nome");
  var valorInserido1 = document.getElementById("nota1");
  var valorInserido2 = document.getElementById("nota2");
  var valorInserido3 = document.getElementById("nota3");
  var valorInserido4 = document.getElementById("nota4");
  
  var nome = nomeInserido.value;
  var nota1 = valorInserido1.value;
  var nota2 = valorInserido2.value;
  var nota3 = valorInserido3.value;
  var nota4 = valorInserido4.value;
  
  var nota1Float = parseFloat(nota1);
  var nota2Float = parseFloat(nota2);
  var nota3Float = parseFloat(nota3);
  var nota4Float = parseFloat(nota4);
  
  var resultado = (nota1Float + nota2Float + nota3Float + nota4Float) /4;
  
  if(resultado>=7){
    var textoExibido = document.getElementById("valorMedia");
    var valorMedia = nome + " a sua média é " + resultado + " você foi aprovado";
    textoExibido.innerHTML = valorMedia;
  } else {
    var textoExibido = document.getElementById("valorMedia");
    var valorMedia = nome + " a sua média é " + resultado + " você foi reprovado";
    textoExibido.innerHTML = valorMedia;
  }
  

  
}
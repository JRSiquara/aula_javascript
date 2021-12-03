//var nome = "José Roberto"; /* Utilizando variaveris */
/* alert("Meu primeiro js."); 
   alert("Bem vindo " + nome );*/
//var idade = 55;
//var idade2 = 10;
// alert("Nome " + nome + " Idade " + idade + " anos."); 
//alert(idade + idade2);
//frase = "Japão é o melhor time do mundo."
//console.log(nome.toUpperCase()); /* console.log() permite inspecionar (F12) no navegador as variaveis. */
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil")); /* ".replace()" Troca a palavra Japão pela palavra Brasil. */
//alert(frase.replace("Japão", "Brasil"));
//alert(frase.toLowerCase()); 

//var lista =  ["maça", "pêra", "laranja"]; /* Array (vetores) */
//console.log(lista[1]);
//console.log(lista);
//alert(lista[1]);
//lista.push("uva"); /* Insere a "uva" na lista. */
//console.log(lista);
//lista.pop("uva"); /* Retira o ultimo elemento da lista. */
//console.log(lista);
//console.log(lista.length); /* tamanho, quantidade de elementos. */
//console.log(lista.reverse()); /* inverte a ordem. */
//console.log(lista.toString()); /* converte em string. */
//console.log(lista.reverse()); /* inverte a ordem novamente. */
//console.log(lista[0]); /* mostra o 1o. elemento */
//console.log(lista.toString()[0]); /* mostra a 1a. letra */
//console.log(lista.toString()); /* converte em string. "maça,pêra,laranja"*/
//console.log(lista.join("-")); /* converte em string separando pelo caracter "-" "maça-pêra-laranja"*/


//var fruta = {nome:"maça", cor:"vermelha"}  /* Dicionário (Matriz) */
//console.log(fruta);
//console.log(fruta.nome);
//alert(fruta.cor);

/*
var frutas = [{nome:"maça", cor:"vermelha"}, 
              {nome:"uva", cor:"roxa"}]  // Lista de Dicionário (Matriz)
console.log(frutas);
console.log(frutas[1].nome);
alert(frutas[1].cor);
*/

/*
var idade = prompt("Qual a sua idade? ");  // prompt permite entrada de dados 
//var idade = 18
if (idade >= 18){
   alert("Maior de idade")
}else{
   alert("Menor de idade")
};
*/

/*
var count = 0;             // Laços de repetição while e for
while ( count <= 5){      
   console.log("Valor de count: "+count);
   count++;
};

var count;
for(count=0; count <=5; count++){
   alert("Valor de count: "+count);
};

var d = new Date();
alert("Data de hoje é: "+d);
alert("Mês: "+(d.getMonth()+1)); // O getMonth() parti do zero, por isso p/ o mês atual tem q por "+1".
alert("Hora: "+d.getHours());
alert("Minutos: "+d.getMinutes());
alert("Dia: "+d.getDay()); // Retorna o dia da semana Sunday - 0, Monday - 1,..., Friday - 5, Saturday - 6.
i = d.getDay();
console.log("i = "+i);
*/

/*
if(i==0){
   diaweek = "Domingo"
}else{
   if(i==1){
      diaweek = "Segunda"
   }else{
      if(i==2){
         diaweek = "Terça"
      }else{
         if(i==3){
            diaweek = "Quarta"
         }else{
            if(i==4){
               diaweek = "Quinta"
            }else{
               if(i==5){
                  diaweek = "Sexta"
               }else{
                  if(i==6){
                     diaweek = "Sabado"
                  }
               }
            }
         }
      }
   }
}
*/

/*
if(i==0){
   diaweek = "Domingo";
}else if(i==1){
   diaweek = "Segunda";
}else if(i==2){
   diaweek = "Terça";
}else if(i==3){
   diaweek = "Quarta";
}else if(i==4){
   diaweek = "Quinta";
}else if(i==5){
   diaweek = "Sexta";
}else if(i==6){
   diaweek = "Sabado";
}
*/

/*
switch (d.getDay()){
   case 0:
      diaweek = "Domingo";
      break;
   case 1:
      diaweek = "Segunda";
      break;
   case 2:
      diaweek = "Terça";
      break;
   case 4:
      diaweek = "Quarta";
      break;
   case 5:
      diaweek = "Sexta";
      break;
   case 6:
      diaweek = "Sabado";
      break;
}
alert("d.getDay() : "+d.getDay());
for(i=0; i <= d.getDay(); i++){
   alert("Valor de i: "+i);
}
alert("dia da semana: "+diaweek);
var data = d.getDay();
console.log("getDay(): "+data);
console.log(diaweek);
*/

/*
function soma(n1, n2){
   return n1 + n2;
}
n1 = Number(prompt("Entre com o 1º número: ")); // Se não usar a função Number irá concatenar e não somar.
console.log(n1);
n2 = Number(prompt("Entre com o 1º número: ")); // pq o prompt inicializa variavel como string.
console.log(n2);
alert("Soma dos valores: "+soma(n1,n2));

function setReplace(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var validar = 0;    // Aqui é uma variavel global.

function validadIdade(idade){
   //var validar;    // Aqui é uma variavel local.
   if (idade >= 18){
      validar = true;    // Se NÃO definir a variavel local, a global será alterada mantendo o 
   }else{                // valor que for atribuido dentro da função. "true/false"
      validar = false;   // Se definir a variavel local, a global será alterada dentro da função  
   }                     // e ao sair da função retornará ao valor original. "0"
   console.log("Dentro da função (local): "+validar); // "true/false"
}

var idade = prompt("Qual a sua idade ? ");
validadIdade(idade);  // "0 ou true/false" Ao definir variavel local informo que as alterações serão 
console.log("Fora da função (global): "+validar); // utilizadas no local e ao sair deverão retornar o 
                                                  // valor original.
*/
function clicou(){
   //alert("Obrigado por clicar.")
   //console.log(document.getElementById("agradecimento"));
   document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar.</b>";
}

function redirecionar(){
   window.open("https://digitalinnovation.one/");  // Abre em uma nova aba 
   //window.location.href = "https://digitalinnovation.one/"; // Abre na mesma aba 
}

function trocar(elemento){
   //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse."
   elemento.innerHTML = "Obrigado por passar o mouse."
   //alert("Trocar texto");
}

function voltar(elemento){
   //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui."
   elemento.innerHTML = "Passe o mouse aqui."
}

function load(){
   alert("Página carregada.")
}

function funcaoChange(elemento){
   console.log(elemento.value);
}
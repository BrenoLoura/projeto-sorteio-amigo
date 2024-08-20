let amigosIncluidos = [];
let listaIncluidos = document.getElementById(`lista-amigos`);
let listaSorteados = document.getElementById(`lista-sorteio`);
function adicionar() {
    let nome = document.getElementById(`nome-amigo`).value; 
    if(nome == ``) {
        alert(`Por favor, digite um nome`);
    } else { 
if(amigosIncluidos.includes(nome)) {
   let resposta =  confirm(`Esse nome ja esta na lista, deseja incluir mesmo assim?`)
      if(resposta) {
        amigosIncluidos.push(` ${nome}`); 
      }      
}
else {
    amigosIncluidos.push(` ${nome}`);
} 
}
listaIncluidos.innerHTML = amigosIncluidos;
document.getElementById(`nome-amigo`).value = ``;
}
function sortear() {

    if(amigosIncluidos.length <= 2) {
        alert(`Limite minimo para o sorteio e 3 nomes`);
    } else {
    embaralha(amigosIncluidos);

   for(let i = 0; i < amigosIncluidos.length; i++) {
      if(i == amigosIncluidos.length - 1) {
        listaSorteados.innerHTML = listaSorteados.innerHTML + amigosIncluidos[i] + ` --> ` + amigosIncluidos[0] + `<br>`;
      }  else {
           listaSorteados.innerHTML = listaSorteados.innerHTML + amigosIncluidos[i] + ` --> ` + amigosIncluidos[i+1] + `<br>`;
      }
    
   }
}
}
function embaralha(amigosIncluidos) {

    for (let indice = amigosIncluidos.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [amigosIncluidos[indice - 1], amigosIncluidos[indiceAleatorio]] = 
            [amigosIncluidos[indiceAleatorio], amigosIncluidos[indice - 1]];
    }
}
function reiniciar() {
    amigosIncluidos = [ ];
    listaIncluidos.innerHTML = amigosIncluidos;
    listaSorteados.innerHTML = ``;
    document.getElementById(`nome-amigo`).value = ``;
    document.getElementById(`lista-sorteio`) = ``;
}
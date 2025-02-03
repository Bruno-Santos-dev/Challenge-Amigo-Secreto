
document.addEventListener("DOMContentLoaded", () => {
    const inserirNome = document.getElementById("amigo"); // declarando/armazenando o id do html no caso "amigo "
    const botãoAdicionar = document.querySelector(".button-add"); // declarando/armazenando a classe do html no caso "botão add "
    const listaNomes = document.getElementById("listaAmigos"); // declarando/armazenando a id do html no caso "a lista de amigos "
    const botãoSortear = document.querySelector(".button-draw"); // declarando/armazenando a classe do html no caso "botão de sortear 
    const resultado = document.getElementById("resultado"); // declarando/armazenando a id do html no caso "o resultado da lista "


    let nomes = []; // declarando os " nomes "
    
     

    botãoAdicionar.addEventListener("click", adicionarAmigo); //dando ação no botao adicionar amigo
    botãoSortear.addEventListener("click", sortearAmigo); //dando ação no botao adicionar amigo

    function adicionarAmigo() { // se o nome for igual vazio "alert" continue
        const nome = inserirNome.value.trim();
        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            
        }else{
        nomes.push(nome);
        atualizarLista();
        inserirNome.value = "";
        }
    }

    function sortearAmigo() {
        if (nomes.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear.");
            
        }else {
        const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
        resultado.innerHTML = `O amigo secreto sorteado é: ${sorteado}`;
        limparLista(); 
        atualizarLista();
        
        }
        
    }
        
    function atualizarLista() {
        listaNomes.innerHTML = "";
        nomes.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaNomes.appendChild(li);
        });

    }

    function limparLista () {
        nomes = [];
        listaNomes.innerHTML = "";
        inserirNome.value = "";
    }
    
    
});




document.addEventListener("DOMContentLoaded", () => {
    const inserirNome = document.getElementById("amigo"); 
    const botãoAdicionar = document.querySelector(".button-add"); 
    const listaNomes = document.getElementById("listaAmigos"); 
    const botãoSortear = document.querySelector(".button-draw");  
    const resultado = document.getElementById("resultado"); 


    let nomes = []; 
    
     

    botãoAdicionar.addEventListener("click", adicionarAmigo); 
    botãoSortear.addEventListener("click", sortearAmigo); 

    function adicionarAmigo() { 
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



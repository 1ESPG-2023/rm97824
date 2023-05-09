// VAMOS CRIAR UM OBJETO PARA ARMAZENAR O NOSSO USUÁRIO:
const usuario = {
    nomeUsuario: "",
    senhaUsuario: ""
}

const usuario1 = {
    nomeUsuario: "Pedro",
    senhaUsuario: "12345"
}

const usuario2 = {
    nomeUsuario: "Ana",
    senhaUsuario: "12345"
}

let listaDeUsuarios = []

listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

localStorage.setItem("listaUser", listaDeUsuarios);

addEventListener("click", (evento)=>{
    evento.preventDefault();

    // console.log(evento.target.id == "btnSubmit");
    if (evento.target.id == "btnSubmit"){
        usuario.nomeUsuario = document.querySelector("#idUser").value;
        usuario.senhaUsuario = document.querySelector("#idPass").value;
        const h1Titulo = document.querySelector("#titulo");
    // VALIDAÇÃO:
    if (usuario.nomeUsuario == "Petrus" && usuario.senhaUsuario == "12345"){
        console.log("VALIDADO");
        h1Titulo.innerHTML = "Bem Vindo: " + usuario.nomeUsuario;
    }else{
        console.log("NÃO VALIDADO")
        h1Titulo.innerHTML = "";
    }
    };
});

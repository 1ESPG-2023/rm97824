//GERANDO DOIS OBJETOS NO LOCALSTORAGE
const usuario1 = {
    nomeUsuario:"predo",
    senhaUsuario:"12345"
}

const usuario2 = {
    nomeUsuario:"anzina",
    senhaUsuario:"12345"
}

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

localStorage.setItem("listaUser",  JSON.stringify(listaDeUsuarios));


//VAMOS CRIAR UM OBJETO PARA ARMAZENAR O NOSSO USUÁRIO
// const usuario = {
//     nomeUsuario:"",
//     senhaUsuario:""
// }



addEventListener("click",(evento)=>{

    evento.preventDefault();

    if(evento.target.id == "btnSubmit"){
        // let usuario = document.querySelector("#idUser").value;
        // let senha = document.querySelector("#idPass").value;
       
        // RECUPERANDO DOS INPUTS
        let inputUserValue = document.querySelector("#idUser").value;
        let inputPassValue = document.querySelector("#idPass").value;
        
        const h1Titulo = document.querySelector("#titulo");

        let lista = JSON.parse(localStorage.getItem("listaUser"));
        let userValidado = {};
        try{
            lista.forEach((usuario)=> {
                //VALIDAÇÃO
                if(inputUserValue == usuario.nomeUsuario && inputPassValue == usuario.senhaUsuario){
                    userValidado = usuario;
                    throw "VALIDADO";
                }
            });

                throw "NÃO VALIDADO";

        }catch(err){
            if(err == "VALIDADO"){
                h1Titulo.innerHTML = "<span><strong>Login validado com sucesso</strong></span>";
                h1Titulo.setAttribute("style", "color: green")
                localStorage.setItem("UserValidado",  JSON.stringify(userValidado));

                //adicionando uma propriedade ao nosso userValidado
                userValidado["token"] = Math.random().toString(16).substring(2)+Math.random().toString(16).substring(2);;

                //direcionando o usuario para a página de sucesso
                window.location.href = "../sucesso.html"
            }else{
                h1Titulo.innerHTML = "<span><strong>Login ou senha inválidos</strong></span>";
                h1Titulo.setAttribute("style", "color: red")

                //direcionando o usuario para a página de erro
                window.location.href = "../erro.html"
            }
        }       
    }
});

try{
    const userBemVindo = document.querySelector("#userWelcome");
    let usuario = JSON.parse(localStorage.getItem("UserValidado"));
    if(usuario.token != ""){
        userBemVindo.innerHTML = usuario.nomeUsuario;
    }else{
        window.location.href = "../erro.html"
    }

    const botaoLogout = document.querySelector("#btnLogout")
    botaoLogout.addEventListener("click", ()=>{
        localStorage.removeItem("UserValidado")
        window.location.href = "../login.html"
    })
}catch(erro){

    if(userBemVindo != null) {
        userBemVindo.innerHTML = JSON.parse(localStorage.getItem("UserValidado")).nomeUsuario;
    }

}
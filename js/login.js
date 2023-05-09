addEventListener("click", (evento)=>{
    
    evento.preventDefault();
    // console.log(evento.target.id == "btnSubmit");
    if(evento.target.id == "btnSubmit") {
        let usuario = document.querySelector("#idUser").value;
        let senha = document.querySelector("#idPass").value;

        //VALIDAÇÃO
        if (usuario == "rm97824" && senha == "12345") {
            console.log("VALIDADO!")
        }else{
            console.log("NÃO VALIDADO!")
        }
    }
})
// for (let index = 0; index < liElement.length; index++) {
//     console.log(liElement[index].textContent);

// }

// //console.log(liElement);

// //declaração de arrays
// let num1 = [1,2,3,4,5];
// let num2 = [6,7,8,9,10];
// //espalhar o array com SPREAD [...]
// let num3 = [...num1, ...num2];

// console.log(`Array 1: ${num1}`);
// console.log(`Array 2: ${num2}`);
// console.log(`Array 3: ${num3}`);

// //Listando o array com map
// num3.map((numero, key)=>{

//     console.log(`${(key + 1)} - Itens do array - ${numero}`);
// })
//convertendo html collection em array de forma indireta
// const liElementHtml = document.getElementsByTagName("li");
// const liElementArray = [...liElementHtml]

// liElementArray.map((item, key)=>{
//     if (item.textContent == "item-39") {
//         console.log(`${key + 1} - ${item.textContent = "LOCALIZADO"}`)
        
//     }
// })


//Listando o Array - Técnica especial
// num3.forEach((itemDoArray)=>{
//     console.log(`Array 3 sendo listado: ${itemDoArray}`)
// })

// function soma(p1, p2, p3) {
//     num1 = p1;
//     num2 = p2;

//     return (parseInt(num1) + parseInt(num2) + parseInt(p3))
//     // console.log(`Resultado: ${parseInt(num1) + parseInt(num2) + parseInt(parametro)}`);
//     // console.log(`Este é o parâmetro que foi passado: ${parametro}`);
// }

// //ARROW FUNCTION

// const mudaCor = () => {

//     //FUNÇÃO SET-TIME-OUT
//     setTimeout(alert("EXECUTOU"), 5000)
// }

// let tmp = "";

// function mudaCor() {
//     let r = "";
//     let g = "";
//     let b = "";

    //Math.random = gera números aleatórios entre 0 e 1
    //ceil, floor e round = que arredondam o némero para cima, para baixo ou aleatóriamente

    //Determinando para a váriavel r um valor entre 0 e 255
    // r = Math.round(Math.random() * 255);
    // g = Math.round(Math.random() * 255);
    // b = Math.round(Math.random() * 255);
    
    // const cabecalho = document.querySelector(".cabecalho");

    // cabecalho.setAttribute("style", `background-color:rgb(${r}, ${g}, ${b})`);

    // tmp = setTimeout(mudaCor, 2000);

// }
// mudaCor();
// let temp = "";

// function mudaImg() {
//     let nr = Math.round(Math.random() * 2);
//     let nr2 = Math.round(Math.random() * 2);
//     let nr3 = Math.round(Math.random() * 2);

//     let caminho = `../img/banner-lateral-${nr}.png`
//     let caminho2 = `../img/banner-lateral-${nr2}.png`
//     let caminho3 = `../img/banner-lateral-${nr3}.png`

//     const img1 = document.querySelector(".l-e>img")
//     img1.src = caminho;

//     const img2 = document.querySelector(".l-d>img")
//     img2.src = caminho2;

//     const img3 = document.querySelector(".central>img")
//     img3.src = caminho3;

//     temp = setTimeout(mudaImg, 2000)

//     // console.log(caminho)
//     // console.log(caminho2)
//     // console.log(caminho3)
// }

// mudaImg();

// let contador = 0;
// function onOff() {
//     const imgLampada = document.querySelector(".imgBull")
//     const imgOff = "../img/pic_bulboff.gif"
//     const imgOn = "../img/pic_bulbon.gif"

//     imgLampada.src = imgOff
//     const botao = document.querySelector(".botao")

//     botao.addEventListener("click", ()=>{

//         if (contador % 2 != 0) {
//             contador = 0
//             imgLampada.src = imgOff
//             botao.textContent = "Ligar"
//         }
//         else {
//             imgLampada.src = imgOn
//             botao.textContent = "Desligar"
//             contador = 1
//         }
//     console.log(contador)
//     })
    
// }
// onOff()

const inputUser = document.querySelector("input[name='nmUser']");
const labelUser = document.querySelector("label[for]")

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style", "outline-color:#ff0000;");
})

inputUser.addEventListener("keyup", ()=> {
    if(inputUser.value.length < 8) {
        inputUser.setAttribute("style", 'outline-color:#ff0000')
        labelUser.setAttribute("style", "color:#ff0000")
    }else{
        inputUser.setAttribute("style", "outline-color:#dddddd")
        labelUser.setAttribute("style", "color:#000000")
    }
})

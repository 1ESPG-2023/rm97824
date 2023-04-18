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

function soma(p1, p2, p3) {
    num1 = p1;
    num2 = p2;

    return (parseInt(num1) + parseInt(num2) + parseInt(p3))
    // console.log(`Resultado: ${parseInt(num1) + parseInt(num2) + parseInt(parametro)}`);
    // console.log(`Este é o parâmetro que foi passado: ${parametro}`);
}

//ARROW FUNCTION

const mudaCor = () => {

    //FUNÇÃO SET-TIME-OUT
    setTimeout(alert("EXECUTOU"), 5000)
}
const liElement = document.getElementsByTagName("li");

// for (let index = 0; index < liElement.length; index++) {
//     console.log(liElement[index].textContent);

// }

// //console.log(liElement);

//declaração de arrays
let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9,10];
let num3 = [num1, num2];
console.log(`Array 1: ${num1}`);
console.log(`Array 2: ${num2}`);
console.log(`Array 3: ${num3}`);

//Listando o Array - Técnica especial
num3.forEach((itemDoArray)=>{
    console.log(`Array 3 sendo listado: ${itemDoArray}`)
})
console.log(`Array 3 sendo listado: ${num3}`)
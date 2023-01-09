const btn = document.getElementById('btn');

const color = document.getElementById('color');

const reset = document.getElementById('reset');

//Lista de hexColor
const colorList = [0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"]

btn.addEventListener('click', () =>{

    let hexColor = '#';

    for(let i = 0; i<6; i++){
        hexColor += colorList[genRandomNumber()];
    }

    color.textContent = hexColor;

    document.body.style.backgroundColor = hexColor

})




function genRandomNumber(){
    //Gera um número aleatório baseado no tamanho do array colorList
    return Math.floor(Math.random() * colorList.length);
}
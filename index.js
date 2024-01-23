const range = document.getElementById('range');
const boxWhite = document.querySelector('.content');
const boxBlack = document.querySelector('.content-black');
const extBox = document.querySelector('.box');

const lamp = document.querySelector('.imgLamp');
const lampBlack = document.querySelector('.lampOff');

function nivel(){
    let valor = Number(range.value)
    boxWhite.style.height = (valor) + '%' ;
    boxBlack.style.height = (100-valor) + '%'
    
    lampOff.style.opacity = 100-(valor) + '%'
    lamp.style.opacity = valor/100;

    document.querySelector('.cnt').style.opacity = (valor+8)+'%';

    if(valor<=25){
        lamp.style.display = 'none';
    }else{
        lamp.style.display = 'block';
    }

    if(valor>=72){
        lampOff.style.display = 'none'
    }else{
        lampOff.style.display = 'block';
    }
}

setInterval(nivel, 10);
const range = document.getElementById('range');
const box = document.querySelector('.content');
const extBox = document.querySelector('.box');
const lamp = document.querySelector('.imgLamp');

function nivel(){
    let valor = Number(range.value)
    box.style.height = (valor) + '%' ;
    
    document.querySelector('.cnt').style.opacity = valor/100+0.08;
    lamp.style.opacity = valor/100;

    if(valor<=25){
        lamp.style.display = 'none';
    }else{
        lamp.style.display = 'block';
    }
}

setInterval(nivel, 10);
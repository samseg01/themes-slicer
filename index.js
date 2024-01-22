const range = document.getElementById('range');
const box = document.querySelector('.content')
const extBox = document.querySelector('.box')
function nivel(){
    let valor = Number(range.value)
    box.style.height = (valor) + '%' ;
    
    document.querySelector('.cnt').style.opacity = valor/100+0.08;
}

setInterval(nivel, 10);
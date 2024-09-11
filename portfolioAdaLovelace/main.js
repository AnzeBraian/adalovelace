const contador = document.querySelector('.counter');

let num = 10000000

function cronometro(){
    setInterval(()=>{ 
        contador.textContent = num++
    },1000)
}

cronometro()
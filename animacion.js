// animacion.js 
const simboloAnimation = ['❄', '❅', '❆', '✶', '⭑', '✨'];

function createContainer() {
    const contenedor = document.createElement('div');
    contenedor.classList.add('contenedor-nieve');
    contenedor.style.position = 'fixed';
    contenedor.style.left = '0';
    contenedor.style.top = '0';
    contenedor.style.width = '100%';
    contenedor.style.height = '100%';
    contenedor.style.pointerEvents = 'none';
    contenedor.style.overflow = 'hidden'; 
    document.body.appendChild(contenedor);
    return contenedor;
}

function createCopo() {
    const copo = document.createElement('div');
    copo.classList.add('copo');
    copo.innerText = simboloAnimation[Math.floor(Math.random() * simboloAnimation.length)];
    copo.style.position = 'absolute';
    copo.style.left = Math.random() * (window.innerWidth + 100) - 50 + 'px'; 
    copo.style.top = '-50px';
    copo.style.fontSize = (20 + Math.random() * 30) + 'px';
    copo.style.animationDuration = (8 + Math.random() * 8) + 's';
    copo.style.animationDelay = (Math.random() * 4) + 's'; 
    copo.style.pointerEvents = 'none';

    const movimientoHorizontal = (Math.random() - 0.5) * 300 + 'px';
    copo.style.setProperty('--movimiento-horizontal', movimientoHorizontal);

    return copo;
}

const contenedorNieve = createContainer();

function crearAnimacion() {
    const copo = createCopo();
    contenedorNieve.appendChild(copo);
    const dur = parseFloat(copo.style.animationDuration) || 8;
    const delay = parseFloat(copo.style.animationDelay) || 0;
    
    const removeAfter = (dur + delay) * 1000 + 500; 
    setTimeout(() => copo.remove(), removeAfter);
}

document.addEventListener('DOMContentLoaded', function() {
    setInterval(crearAnimacion, 300);
});

export { crearAnimacion, createCopo, simboloAnimation };
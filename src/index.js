import { registerImage } from './lazy'

// 1. Mover imagenes hacia JS
// 2. Que las imagenes las use JS
// 3. JS y Eventos para agregar el botón e imágenes de forma interativa.


const maximum = 123;
const minimum = 1;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum

const createImageNode = () => {

    const container = document.createElement('div');
    container.className = 'p-4'

    const imagen = document.createElement('img');
    imagen.className = 'mx-auto rounded-lg';
    imagen.width = '320'
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg` //ToDo

    container.appendChild(imagen);

    return container;
}

const nuevaImagen = createImageNode();
const mountNode = document.getElementById('images')

const addButton = document.querySelector('button');

// 
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
}

addButton.addEventListener("click", addImage); 

mountNode.appendChild(nuevaImagen);


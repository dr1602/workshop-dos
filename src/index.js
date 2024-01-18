import { registerImage } from './lazy'

// 1. Mover imagenes hacia JS
// 2. Que las imagenes las use JS
// 3. JS y Eventos para agregar el botón e imágenes de forma interativa.

let nuevasImagenes = 0;
let imagenesCargadas = 0;

const maximum = 123;
const minimum = 1;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum

const createImageNode = () => {

    const container = document.createElement('div');
    container.className = 'p-4';
    container.id = 'imageContainer';

    const loadingContainer = document.createElement('div');
    loadingContainer.className = 'loading-container mx-auto rounded-lg';

    const imagen = document.createElement('img');
    imagen.className = 'mx-auto rounded-lg bg-slate-300 w-[320px] h-auto hidden';
    imagen.width = '320'
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg` //ToDo

    const loadHandler = () => {
        loadingContainer.style.display = 'none';
        imagen.classList.remove('hidden');
        imagen.classList.add('block');
        registerImage(container);
        ++imagenesCargadas
        console.log(`Imágenes cargadas: ${imagenesCargadas}`);
        console.log(`Total de imágenes: ${nuevasImagenes}`)

        imagen.removeEventListener('load', loadHandler);
    }

    imagen.addEventListener('load', loadHandler);

    // loadingContainer.style.height = `${imagen.clientHeight}px`;
    container.appendChild(loadingContainer)
    container.appendChild(imagen);

    ++nuevasImagenes
    // console.log(`Imágenes cargadas: ${imagenesCargadas}`);
    console.log(`Total de imágenes: ${nuevasImagenes}`)

    return container;
}

const nuevaImagen = createImageNode();
const mountNode = document.getElementById('images');
// const mainContainer = document.getElementById('mainContainer');

const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');

// Creates initial image
const initialImage = () => {
    mountNode.appendChild(nuevaImagen);
    registerImage(nuevaImagen);
}

initialImage()

// Add new image with each click
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);

    mountNode.classList.add('md:grid-cols-3')
}

const deleteImages = () => {
    mountNode.remove()
    location.reload();
    // const container = document.createElement('div');
    // container.id = 'images';
    // container.className = 'my-3 grid grid-cols-1 bg-slate-300 w-[320px]';

    // mainContainer.append(container);
    // console.log(mainContainer)

}

addButton.addEventListener('click', addImage);
deleteButton.addEventListener('click', deleteImages); 






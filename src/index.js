
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
    imagen.src = `https://randomfox.ca/images/${random()}.jpg` //Todo

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
}

addButton.addEventListener("click", addImage); 

mountNode.appendChild(nuevaImagen);





// // llamamos la URL de la API
// const baseUrl = 'https://randomfox.ca'

// // seleccionar el nodo al que se anexarán
// const appNode = document.querySelector('#images');

// // 

// window
//     .fetch(`${baseUrl}/images`)
//     // procesar la respuesta y convertirla en JSON
//     .then((respuesta) => respuesta.json())
//     // JSON -> Data -> Renderizar información
//     .then((responseJson) => {
//         const allItems = [];

//         // const image = document.createElement('img');
//         // image.src = item.image;

//         // image.className = 'mx-auto rounded-xl w-[320px]';
//         // image.alt = 'Author -> Made by: xinitrc';

//         // const imageDiv = document.createElement('div');
//         // imageDiv.append(image);
//         // imageDiv.className = 'p-6'

//         responseJson.data.fetch((item) => {
//             console.log(item.image);

//             const image = document.createElement('img');
//             image.src = item.image;

//             image.className = 'mx-auto rounded-xl w-[320px]';
//             image.alt = 'Author -> Made by: xinitrc';

//             const imageDiv = document.createElement('div');
//             imageDiv.append(image);
//             imageDiv.className = 'p-6'

//             // const buttonAdd = document.createElement('button')
//             // buttonAdd.id = 'addButton';

//             allItems.push(imageDiv)

//         });

//         appNode.append(...allItems);

//     })
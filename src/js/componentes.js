import '../css/componentes.css';

//export para poder usarla fuera de este archivo
export const saludar = ( nombre ) =>{
    // console.log('Creando h1 en el HTML');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}, Cesar te ama mucho :3`;
    document.body.append(h1);
}
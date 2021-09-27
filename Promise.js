
//array de datos
const datos = [{
    id: 1,
    title: 'Iron Man',
    year: 2008
},{
    id: 2,
    title: 'Spiderman',
    year: 2017
},{
    id: 3,
    title: 'Avengers',
    year: 2019
}];

//funcion de devolver datos
// const getDatos = () => {
//     return datos;
// }

//simulando retraso de API para poder usar async await. Este codigo regresa undefined porque no hay nada que haga que espere ese 1.5 segundo
 const getDatos = () => {
     setTimeout(() => {  
        return datos; 
     }, 1500)
 }
 console.log(getDatos());


const getDatos = () => {
    return new Promise((resolve, reject) => {  //Se hace una promise para ejecutar un trozo de codigo, y cuando este listo se ejecute. 2 argumentos: resolve and reject.
        if(datos.length ===0){ //creando un IF para crear un error como ejemplo
            reject(new Error('No existen Datos')); //si hay error se usa reject 
        }
        setTimeout(() => { 
            resolve(datos);  //en lugar de devolver retun datos, hacemos un resolve de datos
        }, 1500);
    });
}

//si se usara un console log por si solo, devolveria simplemente un objeto tipo promise en vez de devolver los datos
// getDatos()
// .then((datos) => console.log(datos)); // en vez de simplemente un console log, se llama a getdatos con un .then() usando argumento datos y ya hay un acceso al objecto: console log de datos.
//.catch(err => ...) //si Hubiera algun error aqui se hace la operacion que se necesite.

async function fetchingData () { //se crea una funcion async a fuerza para que await se pueda usar.
    try{ // Intentar hacer este comando- usa como un if and else
    const datosFetched = await getDatos(); //para el async y await se crea otra variable para esos datos. basicamente dice tenemos datos, espera a tener esos datos
    console.log(datosFetched); //aqui llama a esos datos
    }
    catch (err){ //en caso de un error se muestra el error en console log
        console.log(err.message);
    }
    
    
}

fetchingData(); //llamando a la funcion
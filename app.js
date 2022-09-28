require('colors');
const { inquirerMenu,
        pausa,
        leerInput
      } = require('./helpers/inquirer');
//const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
//const  { mostrarMenu, pausa} = require('./helpers/mensajes')

console.clear();

const main = async()=>{

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if( tareasDB ){
        tareas.cargarTareasFromArr(tareasDB);
    }

    do {

        //Imprimir menu
        opt = await inquirerMenu();
        //console.log({opt});

        switch (opt) {
            case '1':
                // Crear Opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                //console.log(desc);
            break;

            case '2':
                console.log(tareas.listadoArr);
            break;
        
        }

        guardarDB(tareas.listadoArr);
        //const tareas = new Tareas();
        //const tarea = new Tarea('Comprar comida');

        //tareas._listado[tarea.id] = tarea;
        //console.log(tareas);
        await pausa();
    }
    while(opt !== '0');
   

    //pausa();
}

main();
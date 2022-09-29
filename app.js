require('colors');
const { inquirerMenu,
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar
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
                tareas.listadoCompleo();
            break;

            case '3':
                tareas.listarPendientesCompletadas(true);
            break;

            case '4':
                tareas.listarPendientesCompletadas(false);
            break;

            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);

                if(id !== '0'){
                    const ok = await confirmar('¿Está seguro de que la desea borrar');
                    if( ok ){
                        tareas.borrarTarea(id);
                    }
                }
               
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
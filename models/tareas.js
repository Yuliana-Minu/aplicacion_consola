const Tarea = require('./tarea');
/**
 * _listado:
 *      { 'uuid-123344-13323-2: { id:12, desc: asd, completadoEn: 9999}}, 
 */
class Tareas{

    _listado = {};

   
    constructor(){
        this._listado =  {};
    }

    borrarTarea(id = ''){

        if( this._listado[id]){
            delete this._listado[id];
        }
        
    }

    get listadoArr(){
        const listado = [];

        Object.keys(this._listado).forEach( key =>{
            //console.log(key);
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    cargarTareasFromArr( tareas = []) {
        tareas.forEach( tareaArreglo  =>{
            this._listado[tareaArreglo.id] = tareaArreglo;
        })

    }

    crearTarea( desc = ''){

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadoCompleo(){

        console.log();
        this.listadoArr.forEach( (tarea, indice ) => {

            const idx = `${indice + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            console.log(`${ idx} ${ desc} :: ${ estado}`);
            //
        })
    }

    listarPendientesCompletadas( completadas = true){

        console.log();
        let idx = 1;
        this.listadoArr.forEach( (tarea ) => {

            
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            if(completadas === true){
                if ( completadoEn ){
                    console.log(`${ (idx + '.').green} ${ desc} :: ${ completadoEn}`);
                    idx++;
                }
                   
            }
            else{
                if (completadoEn == null){
                    console.log(`${  (idx + '.').red} ${ desc} :: ${ estado}`)
                    idx++;
                }
                
            }
                
                        
            
        })
    }

}

module.exports = Tareas;
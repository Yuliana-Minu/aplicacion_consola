const Tarea = require("./tarea");

/**
 * _listado:
 *      { 'uuid-123344-13323-2: { id:12, desc: asd, completadoEn: 9999}}, 
 */
class Tareas{

    _listado = {};

    constructor(){
        this._listado =  {};
    }

    crearTarea( desc = ''){

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

}

module.exports = Tareas;
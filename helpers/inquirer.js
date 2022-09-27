const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer ?',
        choices: [
            { 
                value: '1',
                name: `${'1.'.green } Crear tareas`
            },
            { 
                value: '2',
                name: `${'2.'.green } Listar tareas`
            },
            { 
                value: '3',
                name: `${'3.'.green } Listar tareas completas`
            },
            { 
                value: '4',
                name: `${'4.'.green } Listar tareas Pendientes`
            },
            { 
                value: '5',
                name: `${'5.'.green } Completar tarea(s)`
            },
            { 
                value: '6',
                name: `${'6.'.green } Borrar tarea`
            },
            { 
                value: '0',
                name: `${'0.'.green } Salir\n `
            }
        ],

    }
];

const pausas = [
    {
        type: 'input',
        name: 'pausar',
        message:`Presione ${'ENTER'.green} para continuar `

    }
]

const inquirerMenu = async()=> {
    //console.clear();
    console.log('================================='.green);
    console.log('   Seleccione una Opcion');
    console.log('=================================\n'.green);

    const {opcion }= await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() =>{

    console.log('\n');
    await inquirer.prompt(pausas);

}

const leerInput = async() =>{

    console.log('\n');
    await inquirer.prompt(pausas);

}


module.exports = {
    inquirerMenu,
    pausa
}
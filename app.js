const {argv} = require('./config/yargs');
const todo = require('./to-do/to-do');
const colors = require('colors');
// console.log(argv);
let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea = todo.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado = todo.getListado(argv.completadofilter);
        for ( let tarea of listado )
        {
            console.log('=============POR HACER ================='.red);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================================'.red);

        }
        break;
    case 'borrar':
        let borrado = todo.borrar(argv.descripcion);
        console.log(borrado);
        break;
    case 'actualizar':
        let actualizado = todo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    default:
        console.log("Comando no reconocido");
}
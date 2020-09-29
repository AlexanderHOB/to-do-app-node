const descripcion = {
    demand:true,
    alias:'d',
    desc:'Descripción de la tarea por hacer'
};
const completado = {
    default:true,
    alias:'c'
};
const completadofilter = {
    alias:'f'
};
const argv = require('yargs')
            .command('crear','Crear una tarea pendiente',{descripcion})
            .command('borrar','Eliminar una tarea registrada',{descripcion})
            .command('actualizar','Actualizar el estado completado de una tarea',{
                descripcion,
                completado })
            .command('listar','Listar las actividades',{completadofilter})
            .help().argv;
            
module.exports={
    argv
}
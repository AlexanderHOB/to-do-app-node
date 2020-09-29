

const { rejects } = require('assert');
const fs = require('fs');
const { number } = require('yargs');


let listadoPorHacer = [];

const guardarDB = () =>{
    return new Promise((resolve,reject)=>{
        let data = JSON.stringify(listadoPorHacer);

        fs.writeFile(`db/data.json`,data,(err)=>{
            if (err) reject(err);
            else resolve(`Listado-tareas.txt`);
        })

    })
}

const cargarDB = () =>{
    try {
        listadoPorHacer=require('../db/data.json');
    } catch (error) {
        listadoPorHacer=[];
    }
    
}
const getListado = (completado = null) =>{
    cargarDB();
    if(completado==null){
        return listadoPorHacer;    
    }else{
        var isTrue = (completado == 'true');
        return listadoPorHacer.filter(tarea=> tarea.completado == isTrue)
    }

}
const crear = (descripcion)=>{
    cargarDB();
    let porHacer = {
        descripcion,
        completado:false,
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}
const actualizar=(descripcion,completado = true)=>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    console.log(index);
    if(index >=0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) =>{
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea=> tarea.descripcion!== descripcion)
    if(listadoPorHacer.length == nuevoListado.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}
module.exports={
    crear,
    getListado,
    actualizar,
    borrar
}
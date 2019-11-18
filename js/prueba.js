/* En este archivo debe agregar las clases JS que considere necesarias para la realización de las pruebas de páginas Estáticas */
function Validar(){
    var nombre, apellido, telefono, correo, interes, observacion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("correo").value;
    interes = document.getElementById("interes").value;
    observacion = document.getElementById("observacion").value;
    
    if(nombre=="" || correo==""){
        alert("Error. Revisar campos obligatorios (nombre y/o correo)");
    }
    else if(!(/\S+@\S+\.\S+/.test(correo))){
        alert("Error. Correo Inválido");
    }
    else{
        alert("Contenido del formulario \nnombre: "+nombre+"\napellido: "+apellido+"\ntelefono: "+telefono+"\ncorreo: "+correo+"\ninteres: "+interes+"\nobservacion: "+observacion);
    }
}
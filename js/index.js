//Obtener los valores del formulario 
function getValuesForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var description = document.getElementById("description").value;
    console.log(`
    Nombre: ${name},
    Email: ${email},
    Descripcion de la tarea: ${description}.
    `);
    cleanForm();
}

function cleanForm(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("description").value = "";
}

function show(q){
    var answer = document.getElementById(q).style.display;
    console.log(answer)
    if(answer == "none"){
        console.log(`mostrar: ${q}`);
        document.getElementById(q).style.display = "block";
    }
    else{
        console.log(`ocultar: ${q}`);
        document.getElementById(q).style.display = "none";
    }
}
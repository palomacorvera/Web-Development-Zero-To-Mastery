var baseDeDatos = [{
        nombreUsuario : "Paloma",
        contraseña : "secret123"
    },
    {
        nombreUsuario : "Pablo",
        contraseña : "selene"
    }
]

var feed = [ {
        nombreUsuario : "Alberto",
        timeline : "Estudiando matemáticas"
    },
    {
        nombreUsuario : "María",
        timeline : "En la playa"
    }
]

var nombreUsuarioPrompt = prompt("Introduce tu nombre de usuario: ");
var contraseñaPrompt = prompt("Introduce tu contraseña: ");

function usuarioValido(nombreUsuario, contraseña) {
    for (var i = 0; i < baseDeDatos.length; i++) {
        if (nombreUsuario === baseDeDatos[i].nombreUsuario && contraseña === baseDeDatos[i].contraseña) {
            return true;
        } 
    }
    return false;
}

function iniciarSesion (nombreUsuario, contraseña) {
    if (usuarioValido(nombreUsuario, contraseña)) {
        console.log(feed);
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

iniciarSesion (nombreUsuarioPrompt, contraseñaPrompt);
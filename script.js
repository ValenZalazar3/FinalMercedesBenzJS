//----------------ENTREGA DEL PROYECTO FINAL---------------

//JQuery Evento Ready
$(document).ready(function() {
    console.log('El DON esta listo');
});

const URLGET = "http://127.0.0.1:5501/tunning.json"
//-------------Hatchback A-------------
$("#hatchA01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafohatchA").append(`
                    <p>${dato.hatchAp}</p>
                `)
            }
        }
    });
});
$("#preciohatchA").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafohatchA").append(`
                    <p>${dato.hatchA} ($ ${dato.hatchApre}) </p>
                `)
            }
        }
    });
});

$("#limpiarhatchA").click(() => $("p").html("") )

//-------------Clase A Sedan ------------------
$("#aSedan01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoaSedan").append(`
                    <p>${dato.aSedanp}</p>
                `)
            }
        }
    });
});
$("#precioaSedan").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoaSedan").append(`
                    <p>${dato.aSedan} ($ ${dato.aSedanpre}) </p>
                `)
            }
        }
    });
});
$("#limpiaraSedan").click(() => $("p").html("") )

//---------------GLA SUV-----------------
$("#Gla01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoGla").append(`
                    <p>${dato.Glap}</p>
                `)
            }
        }
    });
});
$("#precioGla").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoGla").append(`
                    <p>${dato.Gla} ($ ${dato.Glapre}) </p>
                `)
            }
        }
    });
});
$("#limpiarGla").click(() => $("p").html("") )

//-----------------Clase C Coupe--------------------
$("#Coupe01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoCoupe").append(`
                    <p>${dato.Coupep}</p>
                `)
            }
        }
    });
});
$("#precioCoupe").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoCoupe").append(`
                    <p>${dato.Coupe} ($ ${dato.Coupepre}) </p>
                `)
            }
        }
    });
});
$("#limpiarCoupe").click(() => $("p").html("") )

//----------------Clase C Cabrio-------------------
$("#Cca01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoCca").append(`
                    <p>${dato.Ccap}</p>
                `)
            }
        }
    });
});
$("#precioCca").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoCca").append(`
                    <p>${dato.Cca} ($ ${dato.Ccapre}) </p>
                `)
            }
        }
    });
});
$("#limpiarCca").click(() => $("p").html("") )

//----------------A45 AMG-------------------
$("#Amg01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoAmg").append(`
                    <p>${dato.Amgp}</p>
                `)
            }
        }
    });
});
$("#precioAmg").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoAmg").append(`
                    <p>${dato.Amg} ($ ${dato.Amgpre}) </p>
                `)
            }
        }
    });
});
$("#limpiarAmg").click(() => $("p").html("") )

//----------------Clase E sedan -------------------
$("#Esedan01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoEsedan").append(`
                    <p>${dato.Esedanp}</p>
                `)
            }
        }
    });
});
$("#precioEsedan").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoEsedan").append(`
                    <p>${dato.Esedan} ($ ${dato.Esedanpre}) </p>
                `)
            }
        }
    });
});
$("#limpiarEsedan").click(() => $("p").html("") )

//----------------Glc SUV-------------------
$("#Glc01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoGlc").append(`
                    <p>${dato.Glcp}</p>
                `)
            }
        }
    });
});
$("#precioGlc").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoGlc").append(`
                    <p>${dato.Glc} ($ ${dato.Glcpre}) </p>
                `)
            }
        }
    });
});
$("#limpiarGlc").click(() => $("p").html("") )

//----------------Clase E Coupe-------------------
$("#Ecoupe01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoEcoupe").append(`
                    <p>${dato.Ecoupep}</p>
                `)
            }
        }
    });
});
$("#precioEcoupe").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoEcoupe").append(`
                    <p>${dato.Ecoupe} ($ ${dato.Ecoupepre}) </p>
                `)
            }
        }
    });
});
$("#limpiarEcoupe").click(() => $("p").html("") )

//----------------AMG GT-------------------
$("#AmgGt01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoAmgGt").append(`
                    <p>${dato.AmgGtp}</p>
                `)
            }
        }
    });
});
$("#precioAmgGt").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoAmgGt").append(`
                    <p>${dato.AmgGt} ($ ${dato.AmgGtpre}) </p>
                `)
            }
        }
    });
});
$("#limpiarAmgGt").click(() => $("p").html("") )

//SALUDO

$("#titulo").fadeIn("slow", () => {
    $("#titulo").fadeOut(10000);
})


const carrito = []

const productos = [ { Auto: 1, marca: "Clase A", precio: 150000},
{ Auto: 2, marca: "Clase A Sedan", precio: 15000},
{ Auto: 3, marca: "GLA SUV", precio: 15000},
{ Auto: 4, marca: "Clase C Coupe", precio: 30000},
{ Auto: 5, marca: "Clase C Cabrio", precio: 30000},
{ Auto: 6, marca: "Clase A45 AMG", precio: 20000},
{ Auto: 7, marca: "Clase E Sedan", precio: 25000},
{ Auto: 8, marca: "GLC SUV", precio: 16000},
{ Auto: 9, marca: "Clase E Coupe", precio: 15000},
{ Auto: 10, marca: "AMG GT Cabrio ", precio: 20000},
];

document.getElementById("claseAhatch")
    .addEventListener("click", () => agregarElemento(1) )

document.getElementById("aSedan")
    .addEventListener("click", () => agregarElemento(2) )

document.getElementById("glaSuv")
    .addEventListener("click", () => agregarElemento(3) )

document.getElementById("cCoupe")
    .addEventListener("click", () => agregarElemento(4) )

document.getElementById("cCabrio")
    .addEventListener("click", () => agregarElemento(5) )

document.getElementById("claseHatch")
    .addEventListener("click", () => agregarElemento(6) )

document.getElementById("eSedan")
    .addEventListener("click", () => agregarElemento(7) )

document.getElementById("Glc")
    .addEventListener("click", () => agregarElemento(8) )

document.getElementById("Ecoupe")
    .addEventListener("click", () => agregarElemento(9) )

document.getElementById("amgGt")
    .addEventListener("click", () => agregarElemento(10) )

function agregarElemento(productoID) {
    let producto = productos.find ((p => p.Auto == productoID))
    carrito.push(producto);

    mostrarCarrito();
}

function mostrarCarrito() {
    let contenedor = document.getElementById("carrito");
    let precioTotal = 0

    contenedor.innerHTML = "";
    htmlstring = "<ul>";
    for (const id in carrito) {
        let producto = carrito[id]
        htmlstring += `<li class="lijs"> ${producto.marca}, ${producto.precio}
        <button id="carrito_${id}" class="eliminar"> Eliminar </button>
        </li>`
        precioTotal += producto.precio;
    }
    htmlstring +="</ul>";

    contenedor.innerHTML = htmlstring;

    let contenedorPrecio = document.getElementById("precio");
    contenedorPrecio.innerHTML = `<h1 class="h1js">TOTAL: $${precioTotal}</h1>`;

    loadEliminar();
}

function loadEliminar() {
    let botones  = document.getElementsByClassName("eliminar");
    for(const boton of botones) {
        boton.onclick = () => {
            let id = boton.getAttribute("id");
            idNumber = id.split("_")[1]
            carrito.splice(idNumber, 1)

            mostrarCarrito()
        }
    }
}

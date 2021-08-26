var d = new Date();
var t = d.getTime();
var counter = t;

var preciomanzana = 1400;
var precionaranja = 350;
var preciouva = 2000;




function manzana() {
    document.getElementById("nombremanzana").innerHTML = "Harina Pan"
    var candidadmanzana = Number(document.getElementById("cmanzana").value);
    document.getElementById("totalmanzanas").innerHTML = candidadmanzana;
    var costomanzana = candidadmanzana * preciomanzana;
    document.getElementById("costomanzanas").innerHTML = costomanzana;
    document.getElementById("borrarmanzanas").innerHTML = `<p><button type="button" class="btn btn-danger btn-sm" onclick="restarmanzana(), borrarmanzanas()"><i class="fa fa-trash"></i></button></p>`
    document.getElementById("numerodemanzanas").value = candidadmanzana;
}

function borrarmanzanas() {
    document.getElementById("nombremanzana").innerHTML = " ";
    document.getElementById("totalmanzanas").innerHTML = " ";
    document.getElementById("costomanzanas").innerHTML = " ";
    document.getElementById("borrarmanzanas").innerHTML = " ";
    document.getElementById("cmanzana").value = 0;
    document.getElementById("numerodemanzanas").value = 0;

}
//naranjas
function naranja() {

    document.getElementById("nombrenaranja").innerHTML = "Huevos"
    var candidadmanzana = Number(document.getElementById("cnaranja").value);
    document.getElementById("totalnaranjas").innerHTML = candidadmanzana;
    var costomanzana = candidadmanzana * precionaranja;
    document.getElementById("costonaranjas").innerHTML = costomanzana;
    document.getElementById("borrarnaranjas").innerHTML = `<p><button type="button" class="btn btn-danger btn-sm" onclick="restarnaranja(), borrarnaranjas()"><i class="fa fa-trash"></i></button></p>`
    document.getElementById("numerodenaranjas").value = candidadmanzana;
}

function borrarnaranjas() {
    document.getElementById("nombrenaranja").innerHTML = " ";
    document.getElementById("totalnaranjas").innerHTML = " ";
    document.getElementById("costonaranjas").innerHTML = " ";
    document.getElementById("borrarnaranjas").innerHTML = " ";
    document.getElementById("cnaranja").value = 0;
    document.getElementById("numerodenaranjas").value = 0;

}
//Uvas
function uva() {

    document.getElementById("nombruva").innerHTML = "Gaseosa"
    var candidadmanzana = Number(document.getElementById("cuva").value);
    document.getElementById("totaluvas").innerHTML = candidadmanzana;
    var costomanzana = candidadmanzana * preciouva;
    document.getElementById("costouvas").innerHTML = costomanzana;
    document.getElementById("borraruvas").innerHTML = `<p><button type="button" class="btn btn-danger btn-sm" onclick="restaruva(), borraruvas()"><i class="fa fa-trash"></i></button></p>`
    document.getElementById("numerodeuvas").value = candidadmanzana;
}

function borraruvas() {
    document.getElementById("nombruva").innerHTML = " ";
    document.getElementById("totaluvas").innerHTML = " ";
    document.getElementById("costouvas").innerHTML = " ";
    document.getElementById("borraruvas").innerHTML = " ";
    document.getElementById("cuva").value = 0;
    document.getElementById("numerodeuvas").value = 0;

}

function totalPagar() {
    var nummanzanas = Number(document.getElementById("cmanzana").value) * preciomanzana;

    var numnaranjas = Number(document.getElementById("cnaranja").value) * precionaranja;

    var numuvas = Number(document.getElementById("cuva").value) * preciouva;

    var numarrozdiana500g = Number(document.getElementById("cArrozDiana").value) * precioArrozDiana;

    var numARROZDIANAARROBA = Number(document.getElementById("cARROZDIANAARROBA").value) * precioARROZDIANAARROBA;


    var numARROZROA500g = Number(document.getElementById("cARROZROA500g").value) * precioARROZROA500g;

    var totalpagar = nummanzanas + numnaranjas + numuvas + numarrozdiana500g + numARROZDIANAARROBA + numARROZROA500g;
    return document.getElementById("Total").innerHTML = totalpagar;

}

function restarmanzana() {
    var totales = totalPagar()
    var menosmanzana = totales - (Number(document.getElementById("cmanzana").value) * preciomanzana);
    return document.getElementById("Total").innerHTML = menosmanzana;
}

function restarnaranja() {
    var totales = totalPagar()
    var menosmanzana = totales - (Number(document.getElementById("cnaranja").value) * precionaranja);
    return document.getElementById("Total").innerHTML = menosmanzana;
}

function restaruva() {
    var totales = totalPagar()
    var menosmanzana = totales - (Number(document.getElementById("cuva").value) * preciouva);
    return document.getElementById("Total").innerHTML = menosmanzana;
}



function validarbtnmanzana() {
    if ((Number(document.getElementById("cmanzana").value) * preciomanzana) == 0 || (Number(document.getElementById("cmanzana").value) * preciomanzana) < 0) {
        alert("la Cantidad es cero o negativa");
        document.getElementById("cmanzana").value = 0;
    } else {
        manzana();
        totalPagar();
    }
}

function validarbtnnaranja() {
    if ((Number(document.getElementById("cnaranja").value) * precionaranja) == 0 || (Number(document.getElementById("cnaranja").value) * precionaranja) < 0) {
        alert("la Cantidad es cero o negativa");
        document.getElementById("cnaranja").value = 0;
    } else {
        naranja();
        totalPagar();
    }
}

function validarbtnuva() {
    if ((Number(document.getElementById("cuva").value) * preciouva) == 0 || (Number(document.getElementById("cuva").value) * preciouva) < 0) {
        alert("la Cantidad es cero o negativa");
        document.getElementById("cuva").value = 0;
    } else {
        uva();
        totalPagar();
    }
}
var counter = 1;

function increment() {
    return counter++;

}



function alerta() {
    var d = new Date();
    var t = d.getTime();
    var counter = t;
    document.getElementById("ordendecompra").value = counter;
    alert("Su Orden de Compra es" + counter);

}

function restear() {
    location.href = 'https://scharss.github.io/ttbb/'

}

function carritollleno() {
    document.getElementById("vacio").innerHTML = " ";
}


/**ArrozDianax500g**/
var precioArrozDiana = 1600;

function ArrozDiana() {
    document.getElementById("nombreArrozDiana").innerHTML = "ArrozDiana"
    var candidadArrozDiana = Number(document.getElementById("cArrozDiana").value);
    document.getElementById("totalArrozDiana").innerHTML = candidadArrozDiana;
    var costoArrozDiana = candidadArrozDiana * precioArrozDiana;
    document.getElementById("costoArrozDiana").innerHTML = costoArrozDiana;
    document.getElementById("borrarArrozDiana").innerHTML = `<p><button type="button" class="btn btn-danger btn-sm" onclick="restarArrozDiana(), borrarArrozDiana()"><i class="fa fa-trash"></i></button></p>`
    document.getElementById("numerodeArrozDiana").value = candidadArrozDiana;
}

function borrarArrozDiana() {
    document.getElementById("nombreArrozDiana").innerHTML = " ";
    document.getElementById("totalArrozDiana").innerHTML = " ";
    document.getElementById("costoArrozDiana").innerHTML = " ";
    document.getElementById("borrarArrozDiana").innerHTML = " ";
    document.getElementById("cArrozDiana").value = 0;
    document.getElementById("numerodeArrozDiana").value = 0;

}

function restarArrozDiana() {
    var totales = totalPagar()
    var menosArrozDiana = totales - (Number(document.getElementById("cArrozDiana").value) * precioArrozDiana);
    return document.getElementById("Total").innerHTML = menosArrozDiana;
}


function validarbtnArrozDiana() {
    if ((Number(document.getElementById("cArrozDiana").value) * precioArrozDiana) == 0 || (Number(document.getElementById("cArrozDiana").value) * precioArrozDiana) < 0) {
        alert("la Cantidad es cero o negativa");
        document.getElementById("cArrozDiana").value = 0;
    } else {
        ArrozDiana();
        totalPagar();
    }
}
/**fin ArrozDianas**/



//ARROZDIANAARROBAs
var precioARROZDIANAARROBA = 37500;

function ARROZDIANAARROBA() {

    document.getElementById("nombreARROZDIANAARROBA").innerHTML = "ArrozDiana "
    var candidadArrozDiana = Number(document.getElementById("cARROZDIANAARROBA").value);
    document.getElementById("totalARROZDIANAARROBA").innerHTML = candidadArrozDiana;
    var costoArrozDiana = candidadArrozDiana * precioARROZDIANAARROBA;
    document.getElementById("costoARROZDIANAARROBA").innerHTML = costoArrozDiana;
    document.getElementById("borrarARROZDIANAARROBA").innerHTML = `<p><button type="button" class="btn btn-danger btn-sm" onclick="restarARROZDIANAARROBA(), borrarARROZDIANAARROBA()"><i class="fa fa-trash"></i></button></p>`
    document.getElementById("numerodeARROZDIANAARROBA").value = candidadArrozDiana;
}

function borrarARROZDIANAARROBA() {
    document.getElementById("nombreARROZDIANAARROBA").innerHTML = " ";
    document.getElementById("totalARROZDIANAARROBA").innerHTML = " ";
    document.getElementById("costoARROZDIANAARROBA").innerHTML = " ";
    document.getElementById("borrarARROZDIANAARROBA").innerHTML = " ";
    document.getElementById("cARROZDIANAARROBA").value = 0;
    document.getElementById("numerodeARROZDIANAARROBAs").value = 0;

}

function restarARROZDIANAARROBA() {
    var totales = totalPagar()
    var menosArrozDiana = totales - (Number(document.getElementById("cARROZDIANAARROBA").value) * precioARROZDIANAARROBA);
    return document.getElementById("Total").innerHTML = menosArrozDiana;
}

function validarbtnARROZDIANAARROBA() {
    if ((Number(document.getElementById("cARROZDIANAARROBA").value) * precioARROZDIANAARROBA) == 0 || (Number(document.getElementById("cARROZDIANAARROBA").value) * precioARROZDIANAARROBA) < 0) {
        alert("la Cantidad es cero o negativa");
        document.getElementById("cARROZDIANAARROBA").value = 0;
    } else {
        ARROZDIANAARROBA();
        totalPagar();
    }
}
//Fin ARROZDIANAARROBAs

//ARROZROA500gs
var precioARROZROA500g = 1650;

function ARROZROA500g() {

    document.getElementById("nombreARROZROA500g").innerHTML = "ArrozRoa"
    var candidadArrozDiana = Number(document.getElementById("cARROZROA500g").value);
    document.getElementById("totalARROZROA500g").innerHTML = candidadArrozDiana;
    var costoArrozDiana = candidadArrozDiana * precioARROZROA500g;
    document.getElementById("costoARROZROA500g").innerHTML = costoArrozDiana;
    document.getElementById("borrarARROZROA500g").innerHTML = `<p><button type="button" class="btn btn-danger btn-sm" onclick="restarARROZROA500g(), borrarARROZROA500gs()"><i class="fa fa-trash"></i></button></p>`
    document.getElementById("numerodeARROZROA500g").value = candidadArrozDiana;
}

function borrarARROZROA500gs() {
    document.getElementById("nombreARROZROA500g").innerHTML = " ";
    document.getElementById("totalARROZROA500g").innerHTML = " ";
    document.getElementById("costoARROZROA500g").innerHTML = " ";
    document.getElementById("borrarARROZROA500gs").innerHTML = " ";
    document.getElementById("cARROZROA500g").value = 0;
    document.getElementById("numerodeARROZROA500g").value = 0;

}

function restarARROZROA500g() {
    var totales = totalPagar()
    var menosArrozDiana = totales - (Number(document.getElementById("cARROZROA500g").value) * precioARROZROA500g);
    return document.getElementById("Total").innerHTML = menosArrozDiana;
}

function validarbtnARROZROA500g() {
    if ((Number(document.getElementById("cARROZROA500g").value) * precioARROZROA500g) == 0 || (Number(document.getElementById("cARROZROA500g").value) * precioARROZROA500g) < 0) {
        alert("la Cantidad es cero o negativa");
        document.getElementById("cARROZROA500g").value = 0;
    } else {
        ARROZROA500g();
        totalPagar();
    }
}
//fin ARROZROA500g

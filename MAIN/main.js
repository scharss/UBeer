class articulo {
    constructor(nombrearticulo, precioarticulo, carticulo, totalarticulo, costoarticulo, borrararticulo, numeroarticulo) {
        this.nombrearticulo = nombrearticulo;

        this.carticulo = carticulo;
        this.totalarticulo = totalarticulo;
        this.costoarticulo = costoarticulo;
        this.borrararticulo = borrararticulo;
        this.numeroarticulo = numeroarticulo;
        this.precioarticulo = precioarticulo;
        this.articulo1 = function() {
            document.getElementById(this.nombrearticulo).innerHTML = this.nombrearticulo;
            var vcandidadarticulo = Number(document.getElementById(this.carticulo).value);
            document.getElementById(this.totalarticulo).innerHTML = vcandidadarticulo;
            var vcostoarticulo = vcandidadarticulo * this.precioarticulo;
            document.getElementById(this.costoarticulo).innerHTML = vcostoarticulo;
            document.getElementById(this.borrararticulo).innerHTML = `<p><button type="button" class="btn btn-danger btn-sm" onclick="${this.nombrearticulo}.frestararticulo(), ${this.nombrearticulo}.fborrararticulo()"><i class="fa fa-trash"></i></button></p>`
            document.getElementById(this.numeroarticulo).value = vcandidadarticulo;
        }
        this.fborrararticulo = function() {
            document.getElementById(this.nombrearticulo).innerHTML = " ";
            document.getElementById(this.totalarticulo).innerHTML = " ";
            document.getElementById(this.costoarticulo).innerHTML = " ";
            document.getElementById(this.borrararticulo).innerHTML = " ";
            document.getElementById(this.carticulo).value = 0;
            document.getElementById(this.numeroarticulo).value = 0;
        }
        this.frestararticulo = function() {
            var totales = totalPagar()
            var menosarticulo = totales - (Number(document.getElementById(this.carticulo).value) * this.precioarticulo);
            return document.getElementById("Total").innerHTML = menosarticulo;
        }
        this.validararticulo = function() {
            if ((Number(document.getElementById(this.carticulo).value) * this.precioarticulo) == 0 || (Number(document.getElementById(this.carticulo).value) * this.precioarticulo) < 0) {
                alert("la Cantidad es cero o negativa");
                document.getElementById(this.carticulo).value = 0;
            } else {
                this.articulo1();
                totalPagar();
            }
        }

    }
}

/*****Artículos*********** */
var harinapan = new articulo("harinapan", 1800, "charinapan", "totalharinapans", "costoharinapans", "borrarharinapans", "numerodeharinapans");


var huevo = new articulo("huevo", 350, "chuevo", "totalhuevos", "costohuevos", "borrarhuevos", "numerodehuevos");


var arrD500g = new articulo("arrD500g", 1600, "carrD500g", "totalarrD500g", "costoarrD500g", "borrararrD500g", "numerodearrD500g");
/*****Fin Artículos*********** */



function totalPagar() {
    var numharinapans = Number(document.getElementById(harinapan.carticulo).value) * harinapan.precioarticulo;

    var numhuevos = Number(document.getElementById(huevo.carticulo).value) * huevo.precioarticulo;

    var numarrD500g = Number(document.getElementById(arrD500g.carticulo).value) * arrD500g.precioarticulo;


    var totalpagar = numharinapans + numhuevos + numarrD500g;
    return document.getElementById("Total").innerHTML = totalpagar;

}


function restear() {
    location.href = 'https://scharss.github.io/ttbb/'

}

function carritollleno() {
    document.getElementById("vacio").innerHTML = " ";
}
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

function totalPagar() {
    var numcaneagu = Number(document.getElementById("ccaneagu").value) * caneagu.precioarticulo;

    var numbotagus = Number(document.getElementById("cbotagu").value) * botagu.precioarticulo;

    var numcarovi = Number(document.getElementById("ccarovi").value) * carovi.precioarticulo;

    var numborovi = Number(document.getElementById("cborovi").value) * borovi.precioarticulo;

    var numsmirnoff = Number(document.getElementById("csmirnoff").value) * smirnoff.precioarticulo;

    var numbr5es = Number(document.getElementById("cbr5es").value) * br5es.precioarticulo;

    var numcabucanas = Number(document.getElementById("ccabucanas ").value) * cabucanas.precioarticulo;

    var numbobucanas = Number(document.getElementById("cbobucanas").value) * bobucanas.precioarticulo;

    var numbojoscu = Number(document.getElementById("cbojoscu").value) * bojoscu.precioarticulo;

    var numcablwh = Number(document.getElementById("ccablwh").value) * cablwh.precioarticulo;

    var numboblwh = Number(document.getElementById("cboblwh").value) * boblwh.precioarticulo;

    var numchiregl = Number(document.getElementById("cchiregl").value) * chiregl.precioarticulo;

    var numwholpar = Number(document.getElementById("cwholpar").value) * wholpar.precioarticulo;

    var numrelab7 = Number(document.getElementById("crelab7").value) * relab7.precioarticulo;

    var numvokAbs1l = Number(document.getElementById("cvokAbs1l").value) * vokAbs1l.precioarticulo;

    var numpoker6 = Number(document.getElementById("cpoker6").value) * poker6.precioarticulo;

    var numclubcoldor6 = Number(document.getElementById("cclubcoldor6").value) * clubcoldor6.precioarticulo;

    var numclubcolneg6 = Number(document.getElementById("cclubcolneg6").value) * clubcolneg6.precioarticulo;

    var numclubcolroj6 = Number(document.getElementById("cclubcolroj6").value) * clubcolroj6.precioarticulo;

    var numheinek6 = Number(document.getElementById("cheinek6").value) * heinek6.precioarticulo;

    var numcorona6 = Number(document.getElementById("ccorona6").value) * corona6.precioarticulo;

    var numbubweis6 = Number(document.getElementById("cbubweis6").value) * bubweis6.precioarticulo;

    var numaguila6 = Number(document.getElementById("caguila6").value) * aguila6.precioarticulo;

    var numbecks6 = Number(document.getElementById("cbecks6").value) * becks6.precioarticulo;

    var numhamburCom = Number(document.getElementById("chamburCom").value) * hamburCom.precioarticulo;

    var numhotdogcom = Number(document.getElementById("chotdogcom").value) * hotdogcom.precioarticulo;

    var numagucribo = Number(document.getElementById("cagucribo").value) * agucribo.precioarticulo;

    var numgasbretaña = Number(document.getElementById("cgasbretaña").value) * gasbretaña.precioarticulo;


    var totalpagar = numcaneagu + numbotagus + numcarovi + numborovi + numsmirnoff + numbr5es + numcabucanas + numbobucanas + numbojoscu + numcablwh + numboblwh + numchiregl + numwholpar + numrelab7 + numvokAbs1l + numpoker6 + numclubcoldor6 + numclubcolneg6 + numclubcolroj6 + numheinek6 + numcorona6 + numbubweis6 + numaguila6 + numbecks6 + numhamburCom + numhotdogcom + numagucribo + numgasbretaña;
    return document.getElementById("Total").innerHTML = totalpagar;

}
/* Variables */
var gasbretaña = new articulo("gasbretaña", 2950, "cgasbretaña", "totalgasbretaña", "costogasbretaña", "borrargasbretaña", "numerodegasbretaña");

var agucribo = new articulo("agucribo", 1000, "cagucribo", "totalagucribo", "costoagucribo", "borraragucribo", "numerodeagucribo");

var hotdogcom = new articulo("hotdogcom", 20000, "chotdogcom", "totalhotdogcom", "costohotdogcom", "borrarhotdogcom", "numerodehotdogcom");

var hamburCom = new articulo("hamburCom", 20000, "chamburCom", "totalhamburCom", "costohamburCom", "borrarhamburCom", "numerodehamburCom");

var becks6 = new articulo("becks6", 14400, "cbecks6", "totalbecks6", "costobecks6", "borrarbecks6", "numerodebecks6");

var aguila6 = new articulo("aguila6", 12000, "caguila6", "totalaguila6", "costoaguila6", "borraraguila6", "numerodeaguila6");

var bubweis6 = new articulo("bubweis6", 12600, "cbubweis6", "totalbubweis6", "costobubweis6", "borrarbubweis6", "numerodebubweis6");

var corona6 = new articulo("corona6", 24000, "ccorona6", "totalcorona6", "costocorona6", "borrarcorona6", "numerodecorona6");

var heinek6 = new articulo("heinek6", 20100, "cheinek6", "totalheinek6", "costoheinek6", "borrarheinek6", "numerodeheinek6");

var clubcolroj6 = new articulo("clubcolroj6", 350, "cclubcolroj6", "totalclubcolroj6", "costoclubcolroj6", "borrarclubcolroj6", "numerodeclubcolroj6");

var clubcolneg6 = new articulo("clubcolneg6", 15000, "cclubcolneg6", "totalclubcolneg6", "costoclubcolneg6", "borrarclubcolneg6", "numerodeclubcolneg6");

var clubcoldor6 = new articulo("clubcoldor6", 15000, "cclubcoldor6", "totalclubcoldor6", "costoclubcoldor6", "borrarclubcoldor6", "numerodeclubcoldor6");

var poker6 = new articulo("poker6", 13900, "cpoker6", "totalpoker6", "costopoker6", "borrarpoker6", "numerodepoker6");

var vokAbs1l = new articulo("vokAbs1l", 88050, "cvokAbs1l", "totalvokAbs1l", "costovokAbs1l", "borrarvokAbs1l", "numerodevokAbs1l");

var relab7 = new articulo("relab7", 69150, "crelab7", "totalrelab7", "costorelab7", "borrarrelab7", "numeroderelab7");


var wholpar = new articulo("wholpar", 140500, "cwholpar", "totalwholpar", "costowholpar", "borrarwholpar", "numerodewholpar");


var chiregl = new articulo("chiregl", 102850, "cchiregl", "totalchiregl", "costochiregl", "borrarchiregl", "numerodechiregl");


var boblwh = new articulo("boblwh", 42300, "cboblwh", "totalboblwh", "costoboblwh", "borrarboblwh", "numerodeboblwh");

var cablwh = new articulo("cablwh", 23700, "ccablwh", "totalcablwh", "costocablwh", "borrarcablwh", "numerodecablwh");

var bojoscu = new articulo("bojoscu", 72450, "cbojoscu", "totalbojoscu", "costobojoscu", "borrarbojoscu", "numerodebojoscu");

var bobucanas = new articulo("bobucanas", 156000, "cbobucanas", "totalbobucanas", "costobobucanas", "borrarbobucanas", "numerodebobucanas");

var cabucanas = new articulo("cabucanas ", 121000, "ccabucanas ", "totalcabucanas ", "costocabucanas ", "borrarcabucanas ", "numerodecabucanas ");

var br5es = new articulo("br5es", 36000, "cbr5es", "totalbr5es", "costobr5es", "borrarbr5es", "numerodebr5es");

var smirnoff = new articulo("smirnoff", 5550, "csmirnoff", "totalsmirnoff", "costosmirnoff", "borrarsmirnoff", "numerodesmirnoff");

var caneagu = new articulo("caneagu", 16500, "ccaneagu", "totalcaneagu", "costocaneagu", "borrarcaneagu", "numerodecaneagu");


var botagu = new articulo("botagu", 29500, "cbotagu", "totalbotagu", "costobotagu", "borrarbotagu", "numerodebotagu");

var carovi = new articulo("carovi", 21950, "ccarovi", "totalcarovi", "costocarovi", "borrarcarovi", "numerodecarovi");

var borovi = new articulo("borovi", 40950, "cborovi", "totalborovi", "costoborovi", "borrarborovi", "numerodeborovi");







var date = new Date();


var year = date.getFullYear()
var month = date.getMonth() + 1;
var day = date.getDate();
var hours = date.getHours();

var minutes = "0" + date.getMinutes();

var seconds = "0" + date.getSeconds();


var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(year, month, day, formattedTime);

function fecha() {
    document.getElementById("fechax").value = year + "/" + month + "/" + day + " " + formattedTime;
}


function restear() {
    /* location.href = 'https://scharss.github.io/ttbb/'*/
    location.href = 'index.html'

}
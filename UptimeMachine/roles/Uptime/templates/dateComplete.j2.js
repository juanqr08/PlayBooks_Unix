var meses = new Array ("01","02","03","04","05","06","07","08","09","10","11","12");
var fecha=new Date();
var fechaAct;
var dia;
var fechaAct;
var dia;
var clasecpu =(".{{ ansible_hostname }}cpu");
var clasemem = (".{{ ansible_hostname }}memory");
var claseswap = (".{{ ansible_hostname }}swap")
var estados = (".{{ ansible_hostname }}estado");
var EndStateCpu = '';
var EndStateMem = '';
var EndStateSWAP = '';
var EndStateUp = '';

if (fecha.getDate() < 10) {
        dia = ("0"+fecha.getDate());
        fechaAct = (fecha.getFullYear()+"-" + meses[fecha.getMonth()] + "-" + dia + " " + fecha.getHours() + ":" + fecha.getMinutes());
}else{
        fechaAct = (fecha.getFullYear()+"-" + meses[fecha.getMonth()] + "-" + fecha.getDate() + " " + fecha.getHours() + ":" + fecha.getMinutes());
}

//Analisis
var cantidad = $('.Lclient').toArray().length;

clase =(".{{ ansible_hostname }}vdate");
ctime = (".{{ ansible_hostname }}time");
$(clase).each(function(){
    var fechaCam = $(this).text();
    var dateB = moment(fechaCam);
    var cday = (dateB.diff(fechaAct, 'hours') * -1);
        console.log(cday)
    if(cday <= 24 ){
        $(ctime).html(cday + " Horas");
    }else if(cday <= 23 ){
        $(ctime).html(cday + " Horas");
    } else {
        $(ctime).html(cday + " Horas");
    }
    if (cday > 24) {
        EndStateUp = 'OK';
    }else if ( cday <= 23 && cday >= 8){
        $(".{{ ansible_hostname }}time").addClass("Yellow");
        EndStateUp = 'Alerta';
    } else if ( cday <= 8 || cday == 0){
        $(".{{ ansible_hostname }}time").addClass("Red");
        EndStateUp = 'Critico';
    } 
});


$(clasecpu).each(function(){
    var CPU = $(this).text();
    var RCPU = (100 - CPU);
    console.log(RCPU);
    $(this).html(RCPU + "%");
    if (RCPU >= 75 && RCPU <= 85) {
        $(clasecpu).addClass("Yellow");
        EndStateCpu = 'Alerta';
    } else if (RCPU >= 86 ) {
        $(clasecpu).addClass("Red");
        EndStateCpu = 'Critico';
    } else{
        EndStateCpu = 'OK';
    }
});

$(clasemem).each(function(){
    var MEM = $(this).text();
    $(this).html(MEM + "%");
    if (MEM >= 75 && MEM <= 85) {
        $(clasemem).addClass("Yellow");
        EndStateMem = 'Alerta';
    } else if (MEM >= 86 ) {
        $(clasemem).addClass("Red");
        EndStateMem = 'Critico';
    } else{
        EndStateMem = 'OK';
    }
});

$(claseswap).each(function(){
    var SWAP = $(this).text();
    $(this).html(SWAP + "%");
    if (SWAP >= 75 && SWAP <= 85) {
        $(claseswap).addClass("Yellow");
        EndStateSWAP = 'Alerta';
    } else if (SWAP >= 86 ) {
        $(claseswap).addClass("Red");
        EndStateSWAP = 'Critico';
    } else{
        EndStateSWAP = 'OK';
    }
});

var Value = 0;

if (EndStateUp == 'Alerta'){
    Value = (Value + 1);
}
if (EndStateCpu == 'Alerta') {
    Value = (Value + 1);
}
if (EndStateMem == 'Alerta') {
    Value = (Value + 1);
}
if (EndStateSWAP == 'Alerta') {
    Value = (Value + 1);
}

if (EndStateUp == 'Critico'){
    Value = (Value + 2);
}
if (EndStateCpu == 'Critico') {
    Value = (Value + 2);
}
if (EndStateMem == 'Critico') {
    Value = (Value + 2);
}
if (EndStateSWAP == 'Critico') {
    Value = (Value + 2);
}

if (Value >= 8 || Value >= 2) {
    $(estados).html('Critico');
}else if (Value == 1 && Value > 0) {
    $(estados).html('Alerta');
}else{
    $(estados).html('OK');
}
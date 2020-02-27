
<script>
var meses = new Array ("01","02","03","04","05","06","07","08","09","10","11","12");
var fecha=new Date();
var fechaAct;
var dia;
var fechaAct;
var dia;
if (fecha.getDate() < 10) {
    dia = ("0"+fecha.getDate());
    fechaAct = (fecha.getFullYear()+"-" + meses[fecha.getMonth()] + "-" + dia + " " + fecha.getHours() + ":" + fecha.getMinutes());
}else{
    fechaAct = (fecha.getFullYear()+"-" + meses[fecha.getMonth()] + "-" + fecha.getDate() + " " + fecha.getHours() + ":" + fecha.getMinutes());
}

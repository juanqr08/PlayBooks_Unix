clase =(".localhostvdate");
$(clase).each(function(){
    var fechaCam = $(this).text();
    var dateB = moment(fechaCam);
    var cday = (dateB.diff(fechaAct, 'hours') * -1);
        console.log(cday)
    if(cday <= 24 ){
        $(clase).html(cday + " Horas");
    }else if(cday <= 23 ){
        $(clase).html(cday + " Horas");
    } else {
        $(clase).html(cday + " Horas");
    }
    if (cday > 24) {
        EndStateUp = 'OK';
        $('.localhostState').html('OK')
    }else if ( cday <= 23 && cday >= 8){
        $('.localhostState').html('WARN')
    } else if ( cday <= 8 || cday == 0){
        $('.localhostState').html('FAILED')
    } 
});
CIPtables = (".localhostIPTABLES");
$(CIPtables).each(function(){
    StateIP = $(this).text();
    if (StateIP == 'OK') {
        $('.localhostStateIP').html('OK')
    }else{
        $('.localhostStateIP').html('FAILED')
    }
});

CSNMP = (".localhostSNMP");
$(CSNMP).each(function () {
    StateSNMP = $(this).text(); 
    if (StateSNMP == 'OK') {
        $('.localhostStateSNMP').html('OK')
    }else{
        $('.localhostStateSNMP').html('FAILED')
    }
});

CSNMPC = (".localhostSNMPC");
$(CSNMPC).each(function () {
    StateSNMPC = $(this).text(); 
    if (StateSNMPC == 'OK') {
        $('.localhostStateSNMPC').html('OK')
    }else{
        $('.localhostStateSNMPC').html('FAILED')
    }
});

CNTP = (".localhostNTP");
$(CNTP).each(function () {
    StateNTP = $(this).text(); 
    if (StateNTP == 'OK') {
        $('.localhostStateNTP').html('OK')
    }else{
        $('.localhostStateNTP').html('FAILED')
    }
});

CNTPC = (".localhostNTPC");
$(CNTPC).each(function () {
    StateNTPC = $(this).text(); 
    if (StateNTPC == 'OK') {
        $('.localhostStateNTPC').html('OK')
    }else{
        $('.localhostStateNTPC').html('FAILED')
    }
});

SMR = ('.localhostSMR');
$(SMR).each(function () {
    StateSMR = $(this).text(); 
    if (StateSMR == 'OK') {
        $('.localhostStateSMR').html('OK')
    }else{
        $('.localhostStateSMR').html('FAILED')
    }
});
CSMR = (".localhostCSMR");
$(CSMR).each(function () {
    StateCSMR = $(this).text(); 
    if (StateCSMR == 'OK') {
        $('.localhostStateCSMR').html('OK')
    }else{
        $('.localhostStateCSMR').html('FAILED')
    }
});

SIMPANA = ('.localhostSIMPANA');
$(SIMPANA).each(function () {
    StateSIMPANA = $(this).text(); 
    if (StateSIMPANA == 'OK') {
        $('.localhostStateSIMPANA').html('OK')
    }else{
        $('.localhostStateSIMPANA').html('FAILED')
    }
});

CMULTIPATH = ('.localhostMultiPath');
$(CMULTIPATH).each(function () {
    StateCMULTIPATH = $(this).text(); 
    if (StateCMULTIPATH == 'OK' || StateCMULTIPATH == 'N/A') {
        $('.localhostStateMULTIPATH').html('OK')
    }else{
        $('.localhostStateMULTIPATH').html('FAILED')
    }
});

CNFS = ('.localhostNFS');
$(CNFS).each(function () {
    StateCNFS = $(this).text(); 
    if (StateCNFS == 'OK') {
        $('.localhostStateNFS').html('OK')
    }else{
        $('.localhostStateNFS').html('FAILED')
    }
});

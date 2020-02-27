clase =(".{{ ansible_hostname }}vdate");
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
        $('.{{ ansible_hostname }}State').html('OK')
    }else if ( cday <= 23 && cday >= 8){
        $('.{{ ansible_hostname }}State').html('WARN')
    } else if ( cday <= 8 || cday == 0){
        $('.{{ ansible_hostname }}State').html('FAILED')
    } 
});
CIPtables = (".{{ ansible_hostname }}IPTABLES");
$(CIPtables).each(function(){
    StateIP = $(this).text();
    if (StateIP == 'OK') {
        $('.{{ ansible_hostname }}StateIP').html('OK')
    }else{
        $('.{{ ansible_hostname }}StateIP').html('FAILED')
    }
});

CSNMP = (".{{ ansible_hostname }}SNMP");
$(CSNMP).each(function () {
    StateSNMP = $(this).text(); 
    if (StateSNMP == 'OK') {
        $('.{{ ansible_hostname }}StateSNMP').html('OK')
    }else{
        $('.{{ ansible_hostname }}StateSNMP').html('FAILED')
    }
});

CSNMPC = (".{{ ansible_hostname }}SNMPC");
$(CSNMPC).each(function () {
    StateSNMPC = $(this).text(); 
    if (StateSNMPC == 'OK') {
        $('.{{ ansible_hostname }}StateSNMPC').html('OK')
    }else{
        $('.{{ ansible_hostname }}StateSNMPC').html('FAILED')
    }
});

CNTP = (".{{ ansible_hostname }}NTP");
$(CNTP).each(function () {
    StateNTP = $(this).text(); 
    if (StateNTP == 'OK') {
        $('.{{ ansible_hostname }}StateNTP').html('OK')
    }else{
        $('.{{ ansible_hostname }}StateNTP').html('FAILED')
    }
});

CNTPC = (".{{ ansible_hostname }}NTPC");
$(CNTPC).each(function () {
    StateNTPC = $(this).text(); 
    if (StateNTPC == 'OK') {
        $('.{{ ansible_hostname }}StateNTPC').html('OK')
    }else{
        $('.{{ ansible_hostname }}StateNTPC').html('FAILED')
    }
});

SMR = ('.{{ ansible_hostname }}SMR');
$(SMR).each(function () {
    StateSMR = $(this).text(); 
    if (StateSMR == 'OK') {
        $('.{{ ansible_hostname }}StateSMR').html('OK')
    }else{
        $('.{{ ansible_hostname }}StateSMR').html('FAILED')
    }
});
CSMR = (".{{ ansible_hostname }}CSMR");
$(CSMR).each(function () {
    StateCSMR = $(this).text(); 
    if (StateCSMR == 'OK') {
        $('.{{ ansible_hostname }}StateCSMR').html('OK')
    }else{
        $('.{{ ansible_hostname }}StateCSMR').html('FAILED')
    }
});

SIMPANA = ('.{{ ansible_hostname }}SIMPANA');
$(SIMPANA).each(function () {
    StateSIMPANA = $(this).text(); 
    if (StateSIMPANA == 'OK') {
        $('.{{ ansible_hostname }}StateSIMPANA').html('OK')
    }else{
        $('.{{ ansible_hostname }}StateSIMPANA').html('FAILED')
    }
});

CMULTIPATH = ('.{{ ansible_hostname }}MultiPath');
$(CMULTIPATH).each(function () {
    StateCMULTIPATH = $(this).text(); 
    if (StateCMULTIPATH == 'OK' || StateCMULTIPATH == 'N/A') {
        $('.{{ ansible_hostname }}StateMULTIPATH').html('OK')
    }else{
        $('.{{ ansible_hostname }}StateMULTIPATH').html('FAILED')
    }
});

CNFS = ('.{{ ansible_hostname }}NFS');
$(CNFS).each(function () {
    StateCNFS = $(this).text(); 
    if (StateCNFS == 'OK') {
        $('.{{ ansible_hostname }}StateNFS').html('OK')
    }else{
        $('.{{ ansible_hostname }}StateNFS').html('FAILED')
    }
});

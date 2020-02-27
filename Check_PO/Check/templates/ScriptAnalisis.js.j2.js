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
        $('.{{ ansible_hostname }}State').attr('class','GREEN')
    }else if ( cday <= 23 && cday >= 8){
        $('.{{ ansible_hostname }}State').html('WARN')
        $('.{{ ansible_hostname }}State').attr('class','YELLOW')
    } else if ( cday <= 8 || cday == 0){
        $('.{{ ansible_hostname }}State').html('FAILED')
        $('.{{ ansible_hostname }}State').attr('class','RED')
    } 
});
CIPtables = (".{{ ansible_hostname }}IPTABLES");
$(CIPtables).each(function(){
    StateIP = $(this).text();
    if (StateIP == 'STOPPED' || StateIP == 'N/E') {
        $('.{{ ansible_hostname }}StateIP').html('OK')
        $('.{{ ansible_hostname }}StateIP').attr('class','GREEN')
    }else{
        $('.{{ ansible_hostname }}StateIP').html('FAILED')
        $('.{{ ansible_hostname }}StateIP').attr('class','RED')
    }
});

CSNMP = (".{{ ansible_hostname }}SNMP");
$(CSNMP).each(function () {
    StateSNMP = $(this).text(); 
    if (StateSNMP == 'STARTED') {
        $('.{{ ansible_hostname }}StateSNMP').html('OK')
        $('.{{ ansible_hostname }}StateSNMP').attr('class','GREEN')
    }else{
        $('.{{ ansible_hostname }}StateSNMP').html('FAILED')
        $('.{{ ansible_hostname }}StateSNMP').attr('class','RED')
    }
});

CSNMPC = (".{{ ansible_hostname }}SNMPC");
$(CSNMPC).each(function () {
    StateSNMPC = $(this).text(); 
    if (StateSNMPC == 'OK') {
        $('.{{ ansible_hostname }}StateSNMPC').html('OK')
        $('.{{ ansible_hostname }}StateSNMPC').attr('class','GREEN')
    }else{
        $('.{{ ansible_hostname }}StateSNMPC').html('FAILED')
        $('.{{ ansible_hostname }}StateSNMPC').attr('class','RED')
    }
});

CNTP = (".{{ ansible_hostname }}NTP");
$(CNTP).each(function () {
    StateNTP = $(this).text(); 
    if (StateNTP == 'STARTED') {
        $('.{{ ansible_hostname }}StateNTP').html('OK')
        $('.{{ ansible_hostname }}StateNTP').attr('class','GREEN')
    }else{
        $('.{{ ansible_hostname }}StateNTP').html('FAILED')
        $('.{{ ansible_hostname }}StateNTP').attr('class','RED')
    }
});

CNTPC = (".{{ ansible_hostname }}NTPC");
$(CNTPC).each(function () {
    StateNTPC = $(this).text(); 
    if (StateNTPC == 'OK') {
        $('.{{ ansible_hostname }}StateNTPC').html('OK')
        $('.{{ ansible_hostname }}StateNTPC').attr('class','GREEN')
    }else{
        $('.{{ ansible_hostname }}StateNTPC').html('FAILED')
        $('.{{ ansible_hostname }}StateNTPC').attr('class','RED')
    }
});

SMR = ('.{{ ansible_hostname }}SMR');
$(SMR).each(function () {
    StateSMR = $(this).text(); 
    if (StateSMR == 'OK') {
        $('.{{ ansible_hostname }}StateSMR').html('OK')
        $('.{{ ansible_hostname }}StateSMR').attr('class','GREEN')
    }else{
        $('.{{ ansible_hostname }}StateSMR').html('FAILED')
        $('.{{ ansible_hostname }}StateSMR').attr('class','RED')
    }
});
CSMR = (".{{ ansible_hostname }}CSMR");
$(CSMR).each(function () {
    StateCSMR = $(this).text(); 
    if (StateCSMR == 'OK') {
        $('.{{ ansible_hostname }}StateCSMR').html('OK')
        $('.{{ ansible_hostname }}StateCSMR').attr('class','GREEN')
    }else{
        $('.{{ ansible_hostname }}StateCSMR').html('FAILED')
        $('.{{ ansible_hostname }}StateCSMR').attr('class','RED')
    }
});

SIMPANA = ('.{{ ansible_hostname }}SIMPANA');
$(SIMPANA).each(function () {
    StateSIMPANA = $(this).text(); 
    if (StateSIMPANA == 'OK') {
        $('.{{ ansible_hostname }}StateSIMPANA').html('OK')
        $('.{{ ansible_hostname }}StateSIMPANA').attr('class','GREEN')
    }else{
        $('.{{ ansible_hostname }}StateSIMPANA').html('FAILED')
        $('.{{ ansible_hostname }}StateSIMPANA').attr('class','RED')
    }
});

CMULTIPATH = ('.{{ ansible_hostname }}MultiPath');
$(CMULTIPATH).each(function () {
    StateCMULTIPATH = $(this).text(); 
    if (StateCMULTIPATH == 'OK' || StateCMULTIPATH == 'N/A') {
        $('.{{ ansible_hostname }}StateMULTIPATH').html('OK')
        $('.{{ ansible_hostname }}StateMULTIPATH').attr('class','GREEN')
    }else{
        $('.{{ ansible_hostname }}StateMULTIPATH').html('FAILED')
        $('.{{ ansible_hostname }}StateMULTIPATH').attr('class','RED')
    }
});

CNFS = ('.{{ ansible_hostname }}NFS');
$(CNFS).each(function () {
    StateCNFS = $(this).text(); 
    if (StateCNFS == 'OK') {
        $('.{{ ansible_hostname }}StateNFS').html('OK')
        $('.{{ ansible_hostname }}StateNFS').attr('class','GREEN')
    }else{
        $('.{{ ansible_hostname }}StateNFS').html('FAILED')
        $('.{{ ansible_hostname }}StateNFS').attr('class','RED')
    }
});

VMTOOLS = ('.VM-{{ ansible_hostname }}');
$(VMTOOLS).each(function () {
    StateVMTOOLS = $(this).text(); 
    if (StateVMTOOLS == 'OK' || StateVMTOOLS == 'N/A') {
        $('.{{ ansible_hostname }}StateVMTOOLS').html('OK')
        $('.{{ ansible_hostname }}StateVMTOOLS').attr('class','GREEN')
    }else{
        $('.{{ ansible_hostname }}StateVMTOOLS').html('FAILED')
        $('.{{ ansible_hostname }}StateVMTOOLS').attr('class','RED')
    }
});

<script>
    var StateALL = 0
    var Count_Disc = $('.{{ ansible_hostname }}Disc'), State_Disc = $('.{{ ansible_hostname }}State-Disc');
    var Count_DiscS = 0;
    console.log(Count_Disc.toArray().length);
    (Count_Disc).each(function() {
        var value = ($(this).text());
        if (value >= 75) {
            Count_DiscS = (Count_DiscS + 1)
            $('.{{ ansible_hostname }}DiscAll').each(function() {
               if ($(this).text() <= 75) {
                   $(this).parent().hide();
               } 
            });
        }else{
            console.log('No hay saturacion, Tamano: ' + value)
            $('.{{ ansible_hostname }}DiscAll').each(function() {
               if ($(this).text() <= 75) {
                   $(this).parent().hide();
               } 
            });
        }
    });
    State_Disc.html(Count_DiscS)
    if (Count_DiscS > 0) {
        $('.{{ ansible_hostname }}State-Disc').attr('class','YELLOW')
        $('.{{ ansible_hostname }}StateDS').attr('class','YELLOW')
        $('.{{ ansible_hostname }}State-DiscF').attr('class','YELLOW')
        $('.{{ ansible_hostname }}State-DiscF').html('WARNING')
        StateALL = StateALL + 1;
    }else{
        $('.{{ ansible_hostname }}State-DiscF').html('OK')
        $('.{{ ansible_hostname }}State-DiscF').attr('class','GREEN')
    }
    var PCPU = 100 - $('.{{ ansible_hostname }}Porcent_CPU').text().replace(',', '.');
    $('.{{ ansible_hostname }}Porcent_CPU').html(PCPU)
    if (PCPU >= 80 && PCPU < 90) {
        $('.{{ ansible_hostname }}State_CPU').html('WARNING')
        $('.{{ ansible_hostname }}State_CPU').attr('class','YELLOW')
        $('.{{ ansible_hostname }}StateCPU').attr('class','YELLOW')
        StateALL = StateALL + 1;
    } else if (PCPU >= 90){
        $('.{{ ansible_hostname }}State_CPU').html('CRITICAL')
        $('.{{ ansible_hostname }}StateCPU').attr('class','RED')
        $('.{{ ansible_hostname }}State_CPU').attr('class','RED')
        StateALL = StateALL + 2;
    } else{
        $('.{{ ansible_hostname }}State_CPU').html('OK')
        $('.{{ ansible_hostname }}State_CPU').attr('class','GREEN')
        SCPU = 0;
        if (SCPU == 0) {
            Line = 6
            for (let index = 0; index <= 5; index++) {
                LineDelete = Line + index
                $('.{{ ansible_hostname }}Table-DataALL tr:nth-child(' + LineDelete + ')').hide();
            }
        }
    }

    var PMEM = $('.{{ ansible_hostname }}Porcent_MEM').text().replace(',', '.');
    console.log(PMEM)
    if (PMEM >= 70 && PMEM < 90) {
        $('.{{ ansible_hostname }}State_MEM').html('WARNING')
        $('.{{ ansible_hostname }}State_MEM').attr('class','YELLOW')
        $('.{{ ansible_hostname }}StateMEM').attr('class','YELLOW')
        StateALL = StateALL + 1;
    } else if (PMEM >= 90){
        $('.{{ ansible_hostname }}State_MEM').html('CRITICAL')
        $('.{{ ansible_hostname }}StateMEM').attr('class','RED')
        $('.{{ ansible_hostname }}State_MEM').attr('class','RED')
        StateALL = StateALL + 2;
    } else{
        $('.{{ ansible_hostname }}State_MEM').html('OK')
        $('.{{ ansible_hostname }}State_MEM').attr('class','GREEN')
        SMEM = 0;
        if (SMEM == 0) {
            Line = 14
            for (let index = 0; index <= 5; index++) {
                LineDelete = Line + index
                $('.{{ ansible_hostname }}Table-DataALL tr:nth-child(' + LineDelete + ')').hide();
            }
        }
    }

    var PMEMS = $('.{{ ansible_hostname }}SWAP').text().replace(',', '.');
    if (PMEMS >= 70 && PMEMS < 90) {
        $('.{{ ansible_hostname }}State-SWAP').html('WARNING')
        $('.{{ ansible_hostname }}State-SWAP').attr('class','YELLOW')
        $('.{{ ansible_hostname }}State-SWAP').attr('class','YELLOW')
        StateALL = StateALL + 1;
    } else if (PMEMS >= 90){
        $('.{{ ansible_hostname }}State-SWAP').html('CRITICAL')
        $('.{{ ansible_hostname }}State-SWAP').attr('class','RED')
        $('.{{ ansible_hostname }}State-SWAP').attr('class','RED')
        StateALL = StateALL + 2;
    } else{
        $('.{{ ansible_hostname }}State-SWAP').html('OK')
        $('.{{ ansible_hostname }}State-SWAP').attr('class','GREEN')
    }

    console.log("Total: " + StateALL)

    if ( StateALL > 0 && StateALL <= 2) {
        $('.{{ ansible_hostname }}State').html('WARNING')
        $('.{{ ansible_hostname }}State').attr('class','YELLOW')
    }else if (StateALL >= 3) {
        $('.{{ ansible_hostname }}State').html('CRITICAL')
        $('.{{ ansible_hostname }}State').attr('class','RED')
    }else{
        $('.{{ ansible_hostname }}State').html('OK')
        $('.{{ ansible_hostname }}State').attr('class','GREEN')
    }
    var StateSSH = $('.{{ ansible_hostname }}State_SSH1').text().toLowerCase().replace('\n', '')
    if ( StateSSH == 'running') {
        $('.{{ ansible_hostname }}State_SSH').attr('class','GREEN')
    } else {
        $('.{{ ansible_hostname }}State_SSH').attr('class','RED')
    }
    const btn{{ ansible_hostname }}OpenTableSSH = document.querySelector('#{{ ansible_hostname }}Open-TableSSH'), {{ ansible_hostname }}TableSSH = document.querySelector('#{{ ansible_hostname }}Table-DataSSH'),
    btn{{ ansible_hostname }}OpenTableCPU = document.querySelector('#{{ ansible_hostname }}Open-TableCPU'), {{ ansible_hostname }}TableCPU = document.querySelector('#{{ ansible_hostname }}Table-DataCPU'),
    btn{{ ansible_hostname }}OpenTableMEM = document.querySelector('#{{ ansible_hostname }}Open-TableMEM'), {{ ansible_hostname }}TableMEM = document.querySelector('#{{ ansible_hostname }}Table-DataMEM'),
    btn{{ ansible_hostname }}OpenTableSWAP = document.querySelector('#{{ ansible_hostname }}Open-TableSWAP'), {{ ansible_hostname }}TableSWAP = document.querySelector('#{{ ansible_hostname }}Table-DataSWAP'),
    btn{{ ansible_hostname }}OpenTableFS = document.querySelector('#{{ ansible_hostname }}Open-TableFS'), {{ ansible_hostname }}TableFS = document.querySelector('#{{ ansible_hostname }}Table-DataFS'),
    btn{{ ansible_hostname }}OpenTableALL = document.querySelector('#{{ ansible_hostname }}Open-TableALL'), {{ ansible_hostname }}TableALL = document.querySelector('#{{ ansible_hostname }}Table-DataALL');
    
    btn{{ ansible_hostname }}OpenTableSSH.addEventListener('click',() => {
        {{ ansible_hostname }}TableSSH.classList.toggle('active');
        {{ ansible_hostname }}TableCPU.classList.remove('active');
        {{ ansible_hostname }}TableMEM.classList.remove('active');
        {{ ansible_hostname }}TableSWAP.classList.remove('active');
        {{ ansible_hostname }}TableFS.classList.remove('active');
        {{ ansible_hostname }}TableALL.classList.remove('active');
    });
    btn{{ ansible_hostname }}OpenTableSWAP.addEventListener('click',() => {
        {{ ansible_hostname }}TableSSH.classList.remove('active');
        {{ ansible_hostname }}TableCPU.classList.remove('active');
        {{ ansible_hostname }}TableMEM.classList.remove('active');
        {{ ansible_hostname }}TableFS.classList.remove('active');
        {{ ansible_hostname }}TableSWAP.classList.toggle('active');
        {{ ansible_hostname }}TableALL.classList.remove('active');
    });
    btn{{ ansible_hostname }}OpenTableCPU.addEventListener('click',() => {
        {{ ansible_hostname }}TableCPU.classList.toggle('active');
        {{ ansible_hostname }}TableMEM.classList.remove('active');
        {{ ansible_hostname }}TableSSH.classList.remove('active');
        {{ ansible_hostname }}TableSWAP.classList.remove('active');
        {{ ansible_hostname }}TableFS.classList.remove('active');
        {{ ansible_hostname }}TableALL.classList.remove('active');
    });
    btn{{ ansible_hostname }}OpenTableMEM.addEventListener('click',() => {
        {{ ansible_hostname }}TableMEM.classList.toggle('active');
        {{ ansible_hostname }}TableCPU.classList.remove('active');
        {{ ansible_hostname }}TableSSH.classList.remove('active');
        {{ ansible_hostname }}TableSWAP.classList.remove('active');
        {{ ansible_hostname }}TableFS.classList.remove('active');
        {{ ansible_hostname }}TableALL.classList.remove('active');
    });
    btn{{ ansible_hostname }}OpenTableFS.addEventListener('click',() => {
        {{ ansible_hostname }}TableFS.classList.toggle('active');
        {{ ansible_hostname }}TableCPU.classList.remove('active');
        {{ ansible_hostname }}TableSSH.classList.remove('active');
        {{ ansible_hostname }}TableSWAP.classList.remove('active');
        {{ ansible_hostname }}TableMEM.classList.remove('active');
        {{ ansible_hostname }}TableALL.classList.remove('active');
    });
    btn{{ ansible_hostname }}OpenTableALL.addEventListener('click',() => {
        {{ ansible_hostname }}TableALL.classList.toggle('active');
        {{ ansible_hostname }}TableCPU.classList.remove('active');
        {{ ansible_hostname }}TableSWAP.classList.remove('active');
        {{ ansible_hostname }}TableMEM.classList.remove('active');
        {{ ansible_hostname }}TableFS.classList.remove('active');
        {{ ansible_hostname }}TableSSH.classList.remove('active');
    });
</script>
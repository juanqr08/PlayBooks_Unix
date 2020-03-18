<script>
        var StateALL = 0
        var Count_Disc = $('.Disc'), State_Disc = $('.State-Disc');
        var Count_DiscS = 0;
        console.log(Count_Disc.toArray().length);
        (Count_Disc).each(function() {
            var value = ($(this).text());
            if (value >= 75) {
                Count_DiscS = (Count_DiscS + 1)
                $('.{{ ansible_env.COMPUTERNAME }}DiscAll').each(function() {
                   if ($(this).text() <= 75) {
                       $(this).parent().hide();
                   } 
                });
            }else{
                console.log('No hay saturacion, Tamano: ' + value)
                $('.{{ ansible_env.COMPUTERNAME }}DiscAll').each(function() {
                   if ($(this).text() <= 75) {
                       $(this).parent().hide();
                   } 
                });
            }
        });
        State_Disc.html(Count_DiscS)
        if (Count_DiscS > 0) {
            $('.{{ ansible_env.COMPUTERNAME }}State-Disc').attr('class','YELLOW')
            $('.{{ ansible_env.COMPUTERNAME }}StateDS').attr('class','YELLOW')
            $('.{{ ansible_env.COMPUTERNAME }}State-DiscF').attr('class','YELLOW')
            $('.{{ ansible_env.COMPUTERNAME }}State-DiscF').html('WARNING')
            StateALL = StateALL + 1;
        }else{
            $('.{{ ansible_env.COMPUTERNAME }}State-DiscF').html('OK')
            $('.{{ ansible_env.COMPUTERNAME }}State-DiscF').attr('class','GREEN')
        }
        var PCPU = $('.{{ ansible_env.COMPUTERNAME }}Porcent_CPU').text().replace(',', '.');
        console.log(PCPU)
        if (PCPU >= 80 && PCPU < 90) {
            $('.{{ ansible_env.COMPUTERNAME }}State_CPU').html('WARNING')
            $('.{{ ansible_env.COMPUTERNAME }}State_CPU').attr('class','YELLOW')
            $('.{{ ansible_env.COMPUTERNAME }}StateCPU').attr('class','YELLOW')
            StateALL = StateALL + 1;
        } else if (PCPU >= 90){
            $('.{{ ansible_env.COMPUTERNAME }}State_CPU').html('CRITICAL')
            $('.{{ ansible_env.COMPUTERNAME }}StateCPU').attr('class','RED')
            $('.{{ ansible_env.COMPUTERNAME }}State_CPU').attr('class','RED')
            StateALL = StateALL + 2;
        } else{
            $('.{{ ansible_env.COMPUTERNAME }}State_CPU').html('OK')
            $('.{{ ansible_env.COMPUTERNAME }}State_CPU').attr('class','GREEN')
            SCPU = 0;
            if (SCPU == 0) {
                $('.{{ ansible_env.COMPUTERNAME }}Table-DataALL tr:nth-child(8)').hide();
                $('.{{ ansible_env.COMPUTERNAME }}Table-DataALL tr:nth-child(9)').hide();
                $('.{{ ansible_env.COMPUTERNAME }}Table-DataALL tr:nth-child(10)').hide();
                $('.{{ ansible_env.COMPUTERNAME }}Table-DataALL tr:nth-child(11)').hide();
                $('.{{ ansible_env.COMPUTERNAME }}Table-DataALL tr:nth-child(12)').hide();
            }
        }

        var PMEM = $('.{{ ansible_env.COMPUTERNAME }}Porcent_MEM').text().replace(',', '.');
        console.log(PMEM)
        if (PMEM >= 70 && PMEM < 90) {
            $('.{{ ansible_env.COMPUTERNAME }}State_MEM').html('WARNING')
            $('.{{ ansible_env.COMPUTERNAME }}State_MEM').attr('class','YELLOW')
            $('.{{ ansible_env.COMPUTERNAME }}StateMEM').attr('class','YELLOW')
            StateALL = StateALL + 1;
        } else if (PMEM >= 90){
            $('.{{ ansible_env.COMPUTERNAME }}State_MEM').html('CRITICAL')
            $('.{{ ansible_env.COMPUTERNAME }}StateMEM').attr('class','RED')
            $('.{{ ansible_env.COMPUTERNAME }}State_MEM').attr('class','RED')
            StateALL = StateALL + 2;
        } else{
            $('.{{ ansible_env.COMPUTERNAME }}State_MEM').html('OK')
            $('.{{ ansible_env.COMPUTERNAME }}State_MEM').attr('class','GREEN')
            SMEM = 0;
            if (SMEM == 0) {
                $('.{{ ansible_env.COMPUTERNAME }}Table-DataALL tr:nth-child(18)').hide();
                $('.{{ ansible_env.COMPUTERNAME }}Table-DataALL tr:nth-child(19)').hide();
                $('.{{ ansible_env.COMPUTERNAME }}Table-DataALL tr:nth-child(20)').hide();
                $('.{{ ansible_env.COMPUTERNAME }}Table-DataALL tr:nth-child(21)').hide();
                $('.{{ ansible_env.COMPUTERNAME }}Table-DataALL tr:nth-child(22)').hide();
            }
        }

        console.log("Total: " + StateALL)

        if ( StateALL > 0 && StateALL <= 2) {
            $('.{{ ansible_env.COMPUTERNAME }}State').html('WARNING')
            $('.{{ ansible_env.COMPUTERNAME }}State').attr('class','YELLOW')
        }else if (StateALL >= 3) {
            $('.{{ ansible_env.COMPUTERNAME }}State').html('CRITICAL')
            $('.{{ ansible_env.COMPUTERNAME }}State').attr('class','RED')
        }else{
            $('.{{ ansible_env.COMPUTERNAME }}State').html('OK')
            $('.{{ ansible_env.COMPUTERNAME }}State').attr('class','GREEN')
        }
        var StateRDP = $('.{{ ansible_env.COMPUTERNAME }}State_RDP1').text().toLowerCase().replace('\n', '')
        if ( StateRDP == 'running') {
            $('.{{ ansible_env.COMPUTERNAME }}State_RDP').attr('class','GREEN')
        } else {
            $('.{{ ansible_env.COMPUTERNAME }}State_RDP').attr('class','RED')
        }
        const {{ ansible_env.COMPUTERNAME }}btnOpenTableSSH = document.querySelector('#{{ ansible_env.COMPUTERNAME }}Open-TableSSH'), {{ ansible_env.COMPUTERNAME }}TableSSH = document.querySelector('#{{ ansible_env.COMPUTERNAME }}Table-DataSSH'),
        {{ ansible_env.COMPUTERNAME }}btnOpenTableCPU = document.querySelector('#{{ ansible_env.COMPUTERNAME }}Open-TableCPU'), {{ ansible_env.COMPUTERNAME }}TableCPU = document.querySelector('#{{ ansible_env.COMPUTERNAME }}Table-DataCPU'),
        {{ ansible_env.COMPUTERNAME }}btnOpenTableMEM = document.querySelector('#{{ ansible_env.COMPUTERNAME }}Open-TableMEM'), {{ ansible_env.COMPUTERNAME }}TableMEM = document.querySelector('#{{ ansible_env.COMPUTERNAME }}Table-DataMEM'),
        {{ ansible_env.COMPUTERNAME }}btnOpenTableSWAP = document.querySelector('#{{ ansible_env.COMPUTERNAME }}Open-TableSWAP'), {{ ansible_env.COMPUTERNAME }}TableSWAP = document.querySelector('#{{ ansible_env.COMPUTERNAME }}Table-DataSWAP'),
        {{ ansible_env.COMPUTERNAME }}btnOpenTableFS = document.querySelector('#{{ ansible_env.COMPUTERNAME }}Open-TableFS'), {{ ansible_env.COMPUTERNAME }}TableFS = document.querySelector('#{{ ansible_env.COMPUTERNAME }}Table-DataFS'),
        {{ ansible_env.COMPUTERNAME }}btnOpenTableALL = document.querySelector('#{{ ansible_env.COMPUTERNAME }}Open-TableALL'), {{ ansible_env.COMPUTERNAME }}TableALL = document.querySelector('#{{ ansible_env.COMPUTERNAME }}Table-DataALL');
        
        {{ ansible_env.COMPUTERNAME }}btnOpenTableSSH.addEventListener('click',() => {
            {{ ansible_env.COMPUTERNAME }}TableSSH.classList.toggle('active');
            {{ ansible_env.COMPUTERNAME }}TableCPU.classList.remove('active');
            {{ ansible_env.COMPUTERNAME }}TableMEM.classList.remove('active');
            {{ ansible_env.COMPUTERNAME }}TableFS.classList.remove('active');
            {{ ansible_env.COMPUTERNAME }}TableALL.classList.remove('active');
        });
        {{ ansible_env.COMPUTERNAME }}btnOpenTableCPU.addEventListener('click',() => {
            {{ ansible_env.COMPUTERNAME }}TableCPU.classList.toggle('active');
            {{ ansible_env.COMPUTERNAME }}TableMEM.classList.remove('active');
            {{ ansible_env.COMPUTERNAME }}TableSSH.classList.remove('active');
            {{ ansible_env.COMPUTERNAME }}TableFS.classList.remove('active');
            {{ ansible_env.COMPUTERNAME }}TableALL.classList.remove('active');
        });
        {{ ansible_env.COMPUTERNAME }}btnOpenTableMEM.addEventListener('click',() => {
            {{ ansible_env.COMPUTERNAME }}TableMEM.classList.toggle('active');
            {{ ansible_env.COMPUTERNAME }}TableCPU.classList.remove('active');
            {{ ansible_env.COMPUTERNAME }}TableSSH.classList.remove('active');
            {{ ansible_env.COMPUTERNAME }}TableFS.classList.remove('active');
            {{ ansible_env.COMPUTERNAME }}TableALL.classList.remove('active');
        });
        {{ ansible_env.COMPUTERNAME }}btnOpenTableFS.addEventListener('click',() => {
            {{ ansible_env.COMPUTERNAME }}TableFS.classList.toggle('active');
            {{ ansible_env.COMPUTERNAME }}TableCPU.classList.remove('active');
            {{ ansible_env.COMPUTERNAME }}TableSSH.classList.remove('active');
            {{ ansible_env.COMPUTERNAME }}TableMEM.classList.remove('active');
            {{ ansible_env.COMPUTERNAME }}TableALL.classList.remove('active');
        });
        {{ ansible_env.COMPUTERNAME }}btnOpenTableALL.addEventListener('click',() => {
            {{ ansible_env.COMPUTERNAME }}TableALL.classList.toggle('active');
            {{ ansible_env.COMPUTERNAME }}TableCPU.classList.remove('active');
            {{ ansible_env.COMPUTERNAME }}TableMEM.classList.remove('active');
            {{ ansible_env.COMPUTERNAME }}TableFS.classList.remove('active');
            {{ ansible_env.COMPUTERNAME }}TableSSH.classList.remove('active');
        });
</script>
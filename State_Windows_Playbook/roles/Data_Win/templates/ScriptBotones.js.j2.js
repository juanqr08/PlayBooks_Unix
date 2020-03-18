
<script>
    const btnOpen{{ ansible_env.COMPUTERNAME }} = document.querySelector('#Open-{{ ansible_env.COMPUTERNAME }}'),
    Table{{ ansible_env.COMPUTERNAME }} = document.querySelector('#Table-{{ ansible_env.COMPUTERNAME }}'), 
    Cont{{ ansible_env.COMPUTERNAME }} = document.querySelector('#{{ ansible_env.COMPUTERNAME }}contenedor-tabla');
    btnOpen{{ ansible_env.COMPUTERNAME }}.addEventListener('click',() => {
        $('.tabla').each(function() {
            if ( $(this).hasClass("Table-{{ ansible_env.COMPUTERNAME }}") ) {
                Table{{ ansible_env.COMPUTERNAME }}.classList.toggle('active');
                Cont{{ ansible_env.COMPUTERNAME }}.classList.toggle('active2');
                $('.htable').removeClass('active');
            }else{
                $(this).removeClass('active');
            }
        });
        $('.divtabla').each(function() {
            if ( $(this).hasClass("{{ ansible_env.COMPUTERNAME }}-contenedor-tabla") ) {
                Cont{{ ansible_env.COMPUTERNAME }}.classList.toggle('active2');
            }else{
                $(this).removeClass('active2');
            }
        });
    });
</script>

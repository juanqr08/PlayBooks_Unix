
<script>
    const btnOpen{{ ansible_hostname }} = document.querySelector('#Open-{{ ansible_hostname }}'),
    Table{{ ansible_hostname }} = document.querySelector('#Table-{{ ansible_hostname }}'), 
    Cont{{ ansible_hostname }} = document.querySelector('#{{ ansible_hostname }}contenedor-tabla');
    btnOpen{{ ansible_hostname }}.addEventListener('click',() => {
        $('.tabla').each(function() {
            if ( $(this).hasClass("Table-{{ ansible_hostname }}") ) {
                Table{{ ansible_hostname }}.classList.toggle('active');
                Cont{{ ansible_hostname }}.classList.toggle('active2')
                $('.htable').removeClass('active')
            }else{
                $(this).removeClass('active')
            }
        });
    });
</script>

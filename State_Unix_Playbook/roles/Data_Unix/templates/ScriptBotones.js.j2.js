
<script>
    const btnOpen{{ ansible_hostname }} = document.querySelector('#Open-{{ ansible_hostname }}'),
    Table{{ ansible_hostname }} = document.querySelector('#Table-{{ ansible_hostname }}');
    btnOpen{{ ansible_hostname }}.addEventListener('click',() => {
        $('.tabla').each(function() {
            if ( $(this).hasClass("Table-{{ ansible_hostname }}") ) {
                Table{{ ansible_hostname }}.classList.toggle('active');
                $(".{{ ansible_hostname }}contenedor-tabla").toggle('active')
                $('.htable').removeClass('active')
            }else{
                $(this).removeClass('active')
            }
        });
    });
</script>

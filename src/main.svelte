
<style>
#app{
    width:80vw;
    height:100vh;
    background:yellow;   
}

#dark{
     width:80vw;
    height:100vh;
    background:rgba(55,55,55,1);
    display:none;
}
</style>
<script>

import jQuery from 'jquery';
let j$ = jQuery;

    function background(){
        j$('#app').toggle(0);
        j$('#dark').toggle(0);
        console.log('clicked');
    }
</script>



<div id="app" on:click={background}>
</div>
<div id="dark" on:click={background}></div>
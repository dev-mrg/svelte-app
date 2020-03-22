
<style>
#app{
    position: absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background:yellow;   
}

#dark{
        position: absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background:rgba(55,55,55,1);
    display:none;
}
</style>
<script>

import jQuery from 'jquery';
let j$ = jQuery;
   

    function background(){
     const app = j$('#app');
        const dark = j$('#dark');
        // j$('#app').toggle(0);
        // j$('#dark').toggle(0);
      
            app.toggle(100);
            dark.toggle(100);
    }
</script>



<div id="app" on:click={background}>
</div>
<div id="dark" on:click={background}></div>
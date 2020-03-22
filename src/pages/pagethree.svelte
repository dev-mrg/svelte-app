<script>
import jQuery from 'jquery';
const j$ = jQuery;
function p3(){
    j$('.page').hide();
     j$('#page3').show();
}
</script>

<style>
#page3-cont{
    width:80vw;
    height:300vh;
    position:absolute;
    background:rgba(55,55,55,1);
    top:0;
    left:10vw;
    display:flex;
    justify-content: space-around;
}

#p3b{
    position:absolute;
     background:rgb(25, 70, 227);
     border:none;
    left:200px;
    top:15px;
    width:5vw;
    height:4vh;
    z-index: 10;
}
#page3{
    width:80vw;
    height:90vh;
    position:absolute;
    background:rgb(25, 70, 227);
    top:50px;
    display:none;
    justify-content: space-around;
     z-index: 10;
}

</style>


<div id="page3-cont">
<button id="p3b" on:click={p3}>TAB3</button>
<div id="page3" class="page">
<p>Ima Blusish Page</p>
</div>
</div>
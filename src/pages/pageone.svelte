<script>
import jQuery from 'jquery';
const j$ = jQuery;
function p1(){
    j$('.page').hide();
     j$('#page1').show();
}
</script>

<style>
#page1-cont{
    width:80vw;
    height:100vh;
    position:absolute;
    background:rgba(55,55,55,1);
    top:0;
    left:10vw;
    display:flex;
    justify-content: space-around;
}

#p1b{
    position:absolute;
    background:rgb(211, 70, 27);
    left:20px;
    border:none;
    top:15px;
    width:5vw;
    height:4vh;
    z-index: 10;
}
#page1{
    width:80vw;
    height:90vh;
    position:absolute;
    background:rgb(211, 70, 27);
    top:50px;
    display:none;
    justify-content: space-around;
     z-index: 10;
}

</style>


<div id="page1-cont">
<button id="p1b" on:click={p1}>TAB1</button>
<div id="page1" class="page">
<p>Ima Redish Page</p>
</div>
</div>
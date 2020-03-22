<script>
import jQuery from 'jquery';
const j$ = jQuery;
function p3(){
  
    j$('.page').hide();
     j$('#page3').show();
}
</script>

<style>
/* #page3-cont{
    width:100vw;
    height:100vh;
    position:absolute;
    background:rgba(55,55,55,1);
    top:0;
    display:flex;
    justify-content: space-around;
    z-index: 5;
} */

#p3b{
    position:absolute;
     background:rgb(25, 70, 227);
     border:none;
    left:20vw;
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
      left:10vw;
    justify-content: space-around;
     z-index: 10;
}

</style>


<div id="page3-cont">
<a href="#page3" id="p3b" on:click={p3}>TAB3</a>
<div id="page3" class="page">
<p>Ima Blusish Page</p>
</div>
</div>
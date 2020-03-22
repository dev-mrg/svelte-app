<script>
import "/public/global";
import jQuery from 'jquery';
const j$ = jQuery;
function p3(){
  
    j$('.page').hide();
     j$('#page3').show();
    j$('.tab').css('z-index','3');
    j$('#p3b').css('z-index','10');
}
</script>

<style>

#p3b{
     background:rgb(25, 70, 227);
    left:20vw;
}
#page3{

    background:rgb(25, 70, 227);
}

</style>


<div id="page3-cont">
<a href="#page3" id="p3b" class='tab' on:click={p3}>TAB3</a>
<div id="page3" class="page">
<p>Ima Blusish Page</p>
</div>
</div>
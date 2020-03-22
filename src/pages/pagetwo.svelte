<script>
import jQuery from 'jquery';
const j$ = jQuery;
function p2(){
    j$('.page').hide();
     j$('#page2').show();
    j$('.tab').css('z-index','3');
    j$('#p2b').css('z-index','10');
}
</script>

<style>

#p2b{

    background:rgb(70, 70, 27);

    left:15vw;

}
#page2{

    background:rgb(70, 70, 27);

}

</style>


<div id="page2-cont">
<a href="#page2" id="p2b" class='tab' on:click={p2}>TAB2</a>
<div id="page2" class="page">
<p>Ima Greenish Page</p>
</div>
</div>
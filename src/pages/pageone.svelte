<script>
import jQuery from 'jquery';
const j$ = jQuery;
function p1(){
    j$('.page').hide();
     j$('#page1').show();
        j$('.tab').css('z-index','3');
    j$('#p1b').css('z-index','10');
}
</script>

<style>

#p1b{
    background:rgb(211, 70, 27);
     left:10vw;

}
#page1{
    background:rgb(211, 70, 27);
}

.tab{
    z-index: 6;
}

</style>


<div id="page1-cont">
<a href="#page1" id="p1b" class='tab' on:click={p1}>TAB1</a>
<div id="page1" class="page">
<p>Ima Redish Page</p>
</div>
</div>
<script>
import jQuery from 'jquery';
const j$ = jQuery;
function p2(){
    j$('.page').hide();
     j$('#page2').show();

}
</script>

<style>
/* #page2-cont{
    width:100vw;
    height:100vh;
    position:absolute;
    background:rgba(55,55,55,1);
    top:0;
    display:flex;
    justify-content: space-around;
    z-index: 5;
} */

#p2b{
    position:absolute;
    background:rgb(70, 70, 27);
     border:none;
    left:15vw;
    top:15px;
    width:5vw;
    height:4vh;
    z-index: 10;
}
#page2{
    width:80vw;
    height:90vh;
    position:absolute;
    left:10vw;
    background:rgb(70, 70, 27);
    top:50px;
    display:none;
    justify-content: space-around;
     z-index: 10;
}

</style>


<div id="page2-cont">
<a href="#page2" id="p2b" on:click={p2}>TAB2</a>
<div id="page2" class="page">
<p>Ima Greenish Page</p>
</div>
</div>
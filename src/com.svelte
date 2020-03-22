

<script>
export let exp;
import jQuery from 'jquery';
const j$ = jQuery;

function tog(){
    j$('.toggle').toggle(500);
    j$('#loader').toggle(600);
    console.log('working')
}

</script>

<style>
.toggle {
    display: none;
}

#bt{
    background: green;
    width: 10vw;
    height: 7vh;
}

#exp{
    z-index: 100;
    position: absolute;
    left:40%;
    top:10%;
}

#loader {
    position: absolute;
    left: 50%;
    top: 250px;
    z-index: 1;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    animation: spin 4s linear infinite;
    display:none;
}

@keyframes spin {
    0% {
        transform: rotate(0deg) rotateX(0deg);
        
    }

    100% {
        transform: rotate(360deg) rotateX(360deg);
       
    }
}

</style>


<div id="exp">
<p class="toggle">{exp}</p>
<div id="loader"></div>
<button id="bt"on:click={tog}>Push</button>

</div>
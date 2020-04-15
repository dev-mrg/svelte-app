<script>
// import {routes} from "./../router/myrouter.js";
import {routes} from "../router/myrouter";
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
<a href="#page2" id="p2b" class='tab' on:click={routes}>TAB2</a>
<div id="page2" class="page">
<p>Ima Greenish Page</p>
</div>
</div>
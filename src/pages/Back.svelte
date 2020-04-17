
<script>
import {back} from "../router/myrouter.js";
</script>


<style>
#back{
    position:absolute;
    top:0;
    left:0;
	z-index: 25;
	height:40px;
    width:70px;
    color:white;
	background:black;
}
</style>
<div id="children">
<button id="back" class="tab" on:click={back}>Back</button>

</div>
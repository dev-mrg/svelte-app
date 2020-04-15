<script>
// import {routes} from "./../router/myrouter.js";
import {routes,childRoute} from "../router/myrouter";
let p1 = "page1/";
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
<a href="#page1" id="p1b" class='tab' on:click={routes}>TAB1</a>
<div id="page1" class="page">
<p>Ima Redish Page</p>
<div id="children">
<a id="p1c1" class="child-tab" href='#child1' on:click={childRoute}>Imachild</a>
<a id="p1c2" class="child-tab" href="#child2" on:click={childRoute}>Imachild</a>
<div id="child1" class="child">Child 1 here  </div>
<div id="child2" class="child">Child 2 here  </div>
</div>
</div>
</div>
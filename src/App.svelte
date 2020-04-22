<script>
  import Com from "./com.svelte";
  import P1 from "./pages/pageone.svelte";
  import P2 from "./pages/pagetwo.svelte";
  import P3 from "./pages/pagethree.svelte";
  import A1 from "./pages/auth/Authpage.svelte";
  import Back from "./pages/Back.svelte";
  import { loggedin, loggedout, routes} from "./router/myrouter.js";
  const sometext = "I Dont Know? ";


//   function loggedin() {
//   document.getElementById("in").checked = true;
//    document.getElementById("out").checked = false;
// }
// function loggedout() {
//     document.getElementById("in").checked = false;
//    document.getElementById("out").checked = true;
// }
</script>

<style>


  #pages{
	  max-height:90vh;
	  margin-left:-20vw;
	  margin-top:10vh;
	  overflow:hidden;
	  display:flex;
	  justify-content: space-around;;
	  overflow-x:hidden;
	  /* padding:10px; */
  }
  .tab {
    position: relative;
	   color:white;
	   padding:0 10px 0 10px;
    width: 80px;
    background: rgba(30, 30, 185, 0.5);
    text-align: center;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 5;
    font-size:1.5rem;
    text-decoration: none;
  }

  .container{
    display:flex;
    flex-direction:column;
  }
</style>

<body>
<div class="full">
  <div class="navbar">
  <div>


  </div>
    <a href="#auth" id="a1" class="tab" on:click={routes}>Auth</a>
    <a href="#page1" id="p1b" class="tab" on:click={routes}>Page1</a>
    <Com /> 
    <a href="#page2" id="p2b" class="tab" on:click={routes}>Page2</a>
    <a href="#page3" id="p3b" class="tab" on:click={routes}>Page3</a>
      <form>
    <div class="container">
    <div>
  <button on:click={loggedin}>log in </button>
    <input disabled="true" type="radio" name="loggedin" id="in">log in
   
    </div>
    <div>
<button on:click={loggedout}>log out</button>
   <input disabled="true" type="radio" name="loggedout" id="out">log out
    </div>
</div>

  </form>

  </div>

  <div id="pages">
<Back/>
  <A1/>
 
    <P1 />
    <P2 />
    <P3 />

  </div>
  
  </div>
</body>

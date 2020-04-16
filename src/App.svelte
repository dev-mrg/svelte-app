<script>
  import Com from "./com.svelte";
  import P1 from "./pages/pageone.svelte";
  import P2 from "./pages/pagetwo.svelte";
  import P3 from "./pages/pagethree.svelte";
  import A1 from "./pages/auth/Authpage.svelte";
  import Back from "./pages/Back.svelte";
  import { loggedin, loggedout, routes } from "./router/myrouter.js";
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
</style>

<body>
<div class="full">
  <div class="navbar">
  <div>
  <form>
    <input type="radio" name="loggedin" id="in">log in<br>
  <input type="radio" name="loggedout" id="out">log out
  </form>
  <button on:click={loggedin}>log in </button>
<button on:click={loggedout}>log out</button>
  </div>
    <a href="#auth" id="a1" class="tab" on:click={routes}>Auth</a>
    <a href="#page1" id="p1b" class="tab" on:click={routes}>Page1</a>
    <a href="#page2" id="p2b" class="tab" on:click={routes}>Page2</a>
    <a href="#page3" id="p3b" class="tab" on:click={routes}>Page3</a>
  </div>

  <div id="pages">
  <A1/>
    <P1 />
    <P2 />
    <P3 />
  </div>
  <Com exp={sometext} />
  </div>
</body>

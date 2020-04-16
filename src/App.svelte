<script>
  import Com from "./com.svelte";
  import P1 from "./pages/pageone.svelte";
  import P2 from "./pages/pagetwo.svelte";
  import P3 from "./pages/pagethree.svelte";
  import Back from "./pages/Back.svelte";
  import { routes } from "./router/myrouter.js";
  const sometext = "I Dont Know? ";
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
    <a href="#page1" id="p1b" class="tab" on:click={routes}>TAB1</a>
    <a href="#page2" id="p2b" class="tab" on:click={routes}>TAB2</a>
    <a href="#page3" id="p3b" class="tab" on:click={routes}>TAB3</a>
  </div>

  <div id="pages">
    <P1 />
    <P2 />
    <P3 />
  </div>
  <Com exp={sometext} />
  </div>
</body>

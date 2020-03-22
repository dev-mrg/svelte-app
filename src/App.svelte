<script>

import Com from './com.svelte';
import Comtwo from './comtwo.svelte';
import Stuff from './main.svelte';
import P1 from './pages/pageone.svelte';
import P2 from './pages/pagetwo.svelte';
import P3 from './pages/pagethree.svelte';
const youMama = "I Dont Know? ";
</script>


<main>
<Stuff/>
<div>
<P1/><P2/><P3/></div>
<Com exp={youMama} />
<Comtwo name={'asshole'}/>



</main>

<style>
	main {
		width:100vw;
		height:100vh;
		position: absolute;

	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>




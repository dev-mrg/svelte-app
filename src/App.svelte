<script>

import Com from './com.svelte';
import Comtwo from './comtwo.svelte';
import Stuff from './main.svelte';
import P1 from './pages/pageone.svelte';
import P2 from './pages/pagetwo.svelte';
import P3 from './pages/pagethree.svelte';
const youMama = "HOOKER!";
</script>

<main>
<Stuff/>
<P1/><P2/><P3/>
<Com exp={youMama} />
<Comtwo name={'asshole'}/>



</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}



	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>




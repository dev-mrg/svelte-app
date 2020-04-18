

<style>


#cvs {
    position: relative;
    width: 100%;
    height: auto;
}

#blendModes {
    position: absolute;
    z-index: 2;
    top: 20px;
    right: 20px;
    font-size: 16px;
}

#clear {
    position: absolute;
    z-index: 2;
    bottom: 20px;
    right: 20px;
    font-size: 16px;
}

</style>
	

	<div id="page3" class="page">
<canvas id="cvs"></canvas>

<select name="blendModes" id="blendModes">
  <option value="normal">normal</option>
  <option value="multiply">multiply</option>
  <option value="screen">screen</option>
  <option value="overlay">overlay</option>
  <option value="darken">darken</option>
  <option value="lighten">lighten</option>
  <option value="color">color-dodge</option>
  <option value="color">color-burn</option>
  <option value="hard">hard-light</option>
  <option value="soft">soft-light</option>
  <option value="difference" selected>difference</option>
  <option value="exclusion">exclusion</option>
  <option value="hue">hue</option>
  <option value="saturation">saturation</option>
  <option value="color">color</option>
  <option value="luminosity">luminosity</option>
</select>

<button id="clear">Clear</button>

     </div>
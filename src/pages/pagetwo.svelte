<script>
  import { onMount } from "svelte";

  onMount(() => {
    var can = document.getElementById("can");
    var c = can.getContext("2d");

    var gridsize = 100;
    var cellWidth = (1 / gridsize) * can.width + 1;
    var cellHeight = (1 / gridsize) * can.height + 1;
    can.width = innerWidth - 300;
    can.height = innerHeight;
    var w = innerWidth / 5;
    var h = innerHeight / 5;
    var mouseX, mouseY, mouseInteract;
    var interact = false;
    let num = 20;
    let grid = [];
    let inc = 1;
    var grd;
    let count = 1;
    let count2 = 1;
    let rotate = 0;
    let rot = 5;
    let cellx = 1;
    let celly = 1;
    var mouseX, mouseY, mouseInteract;

    function colors(choice) {
      let color;
      let inc = 1;
      count += 1;
      let arr = [
        "red",
        "blue",
        "black",
        "gray",
        "yellow",
        "white",
        "green",
        "orange",
        "purple"
      ];
      console.log(count);
      if (count >= 200) {
        count2 += inc;
        count = 0;
        console.log(arr[count2]);
        if (count2 === 255) {
          inc = -inc;
        }
      }
      //   return arr[choice];
      return color;
    }

    function grabcolor(inc) {
      console.log(rotate + " " + count);
      grd = c.createLinearGradient(rotate * 2, rotate, num * 2, -num);
      grd.addColorStop(0, "rgba(45,45,225,1)");
      grd.addColorStop(0.25, `rgba(0,0,${count2},1)`);
      grd.addColorStop(0.5, "rgba(0,0,225,1)");
      grd.addColorStop(0.75, "rgba(180,180,225,1)");
      grd.addColorStop(1, `rgba(0,0,${count2},1)`);
      console.log(colors(7));
      return grd;
    }

    function grabcolor2(inc) {
      console.log(rotate + " " + count);
      grd = c.createLinearGradient(rotate, 0, num, num);
      grd.addColorStop(0, "green");
      grd.addColorStop(0.25, colors(count));
      grd.addColorStop(0.75, "red");
      grd.addColorStop(1, "black");
      console.log(colors(7));
      return grd;
    }

    function angle() {
      rotate += rot;
      if (rotate >= 3600 || rotate <= -3600) {
        rot = -rot;
      }
    }

    function fade() {
      num += inc;
      if (num >= 1500 || num <= -1500) {
        inc = -inc;
      }
    }

    function anim() {
      if (interact) {
        requestAnimationFrame(anim);
        cells();
        fade();
        angle();
        c.fillStyle = `rgba(0,0,55,1)`;
        // c.clearRect(0, 0, canvas.width, canvas.height);
        // c.fillStyle=grabcolor(num);
        // c.drawImage(can, 0, 0);
        // c.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        c.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    function clearCanvas() {
      can.width = innerWidth - 300;
      can.height = innerHeight;
    }

    function mouseEs() {
      if (mouseInteract) {
        var i = Math.floor((gridSize * mouseX) / can.width);
        var j = Math.floor((gridSize * mouseY) / can.height);
      }
    }

    can.addEventListener("mousedown", function(e) {
      console.log("mousedown");
      mouseInteract = true;
      mouseX = e.offsetX;
      mouseY = e.offsetY;
      c.scale(1.2, 1.2);
      c.fillRect(mouseX, mouseY, mouseX, mouseY);
    });

    can.addEventListener("mouseup", function(e) {
      console.log("mouseup");
      mouseInteract = true;
      mouseX = e.offsetX;
      mouseY = e.offsetY;
      c.scale(0.9, 0.9);
      c.fillRect(mouseX, mouseY, mouseX, mouseY);
    });

    //     var c = document.getElementById("myCanvas");
    // var ctx = c.getContext("2d");
    // ctx.strokeRect(5, 5, 25, 15);
    // ctx.scale(2, 2);
    // ctx.strokeRect(5, 5, 25, 15);

    can.addEventListener("mouseover", function(e) {
      mouseInteract = false;
      interact = true;
      anim();
    });

    can.addEventListener("mouseout", function(e) {
      interact = false;
      c.clearRect(0, 0, canvas.width, canvas.height);
      c.fillRect(0, 0, canvas.width, canvas.height);
    });
    let change = [];

    //   function cells(){
    //         for(let i =0; i < gridsize; i++){
    //             for(let j = 0; j < gridsize; j++){
    //                 // grid.push(i);
    //                 // grid.push(j);

    //             var cell = grid[i + j * gridsize];

    //             var x = i / (gridsize) * can.width ;
    //             var y = j / (gridsize) * can.height;

    //             c.fillRect(x, y, (cellWidth ), (cellHeight ));
    //             }
    //         }
    //         console.log(grid.length)
    //     }
     let cube;
    let gridx=[];
    let gridy=[];
    let gridcount = 0;
    let gridinc = 1;
    function cells() {
      gridcount += gridinc;
      if (gridcount <= gridsize*5) {
        cellx += 0.2;
        celly += 0.2;
        for (let i = 0; i < cellx; i++) {
          for (let j = 0; j < celly; j++) {
            // var cell = grid[i + j * gridsize];
               gridx.push(x);
                grid.push(gridx)
               gridy.push(y);
                grid.push(gridy)
            var x = (i / gridsize) * (can.width / 1.8);
            var y = (j / gridsize) * (can.height / 1.4);
          cube = {
               x:x,
               y:y,
               width:cellWidth,
               height:cellHeight
           };
            c.fillRect(cube.x,cube.y,cube.width,cube.height);
      
          }
       
        }
      if(gridcount>=gridsize*5){
       cube.x -=1;
      }
      }
    }
  });
</script>

<style>
  #can {
    margin: 25px 25px 25px 25px;
    border: 2pxx inset gray;
    box-shadow: 1px 2px 15px 2px black;
  }
</style>

<div id="page2" class="page">
  <h1>Hold mouse button down and drag!</h1>
  <canvas id="can" />

</div>

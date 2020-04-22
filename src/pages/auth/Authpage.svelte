<script>
  import { onMount } from "svelte";

  onMount(() => {
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    var canvas2 = document.getElementById("canvas2");
    var c2 = canvas2.getContext("2d");
    var disruption = 0.008;
    var cushion = 0.955;
    var initialHeight = 0.42;
    var cells = [];
    var gridSize = 100;
    var level = 0;
    canvas2.width = 0.0001;
    canvas2.height = 0.0001;
    var cellWidth = (1 / gridSize) * canvas.width + 1.5;
    var cellHeight = (1 / gridSize) * canvas.height + 1.5;
    canvas.width = innerWidth - 300;
    canvas.height = innerHeight;
    var w = innerWidth / 5;
    var h = innerHeight / 5;
    var mf = Math.floor;
    var mouseX, mouseY, mouseInteract;
    var interact = false;
    var color;
    let mousein;

    function initialState() {
      console.log("IS");

      colorz(color);
      cellsPack();
    }

    function anim() {
      console.log("anim");
     if(mousein){
         requestAnimationFrame(anim);

      if (interact) {
        // clearCanvas();
        load();
        colorGrid();
        mouseEs();
        c2.drawImage(canvas, 0, 0);
      }
         }else{window.cancelAnimationFrame(c)}
    }

    var colors = [];
    function colorz(color) {
      console.log("color");
      for (var color = 0; color < 255; color++) {
        var color3 = color / 10;
        // var rCol = random(0, 255);
        var cc = `rgb(${color},0,0)`;
        var cd = `rgb(${color},${color},0)`;
        colors.push(cc);
      }
    }

    function cellsPack() {
      console.log("CellsPack");
      for (var i = 0; i < gridSize; i++) {
        for (var j = 0; j < gridSize; j++) {
          var checkCell = false;
          if (i === mf(gridSize)) if (j === mf(gridSize)) checkCell = true;
          cells.push({
            height: checked(),
            velocity: 0.2
          });

          function checked() {
            if (checkCell === true) {
              return 1;
            } else if (checkCell === false) {
              return initialHeight;
            }
            last();
          }
        }
      }
    }

    function clearCanvas() {
      console.log("cleared");
      canvas.width = innerWidth - 300;
      canvas.height = innerHeight;
      cellWidth = (1 / gridSize) * canvas.width + 1.5;
      cellHeight = (1 / gridSize) * canvas.height + 1.5;
    }
    function colorGrid() {
      console.log("colorGrid");
      for (var i = 0; i < gridSize; i++) {
        for (var j = 0; j < gridSize; j++) {
          var cell = cells[i + j * gridSize];
          var x = (i / gridSize) * canvas.width + 1.5;
          var y = (j / gridSize) * canvas.height + 1.5;
          color = mf(cell.height * 255);
          c.fillStyle = colors[(color, color)];
          c.fillRect(x, y, cellWidth + 1.5, cellHeight + 1.5);
        }
      }
    }
    function load() {
      console.log("load");
      var avgHeight = 0;
      for (var i = 0; i < gridSize; i++) {
        for (var j = 0; j < gridSize; j++) {
          // center cell
          var cell = cells[i + j * gridSize];
          for (var di = -1; di <= 1; di += 1) {
            for (var dj = -1; dj <= 1; dj += 1) {
              if (di !== 0 || dj !== 0) {
                var ni = (i + di + gridSize) % gridSize;
                var nj = (j + dj + gridSize) % gridSize;
                var next = cells[ni + nj * gridSize];
                cell.velocity +=
                  (disruption + 0.001) * (next.height - cell.height);
              }
            }
          }
          cell.height += cell.velocity;
          cell.height += level;
          cell.velocity *= cushion;
          avgHeight += cell.height;
        }
      }
      avgHeight /= Math.pow(gridSize, 2);
      level = initialHeight - avgHeight / 1.1;
    }

    function mouseEs() {
      console.log("mouseEs");
      if (mouseInteract) {
        var i = mf((gridSize * mouseX) / canvas.width);
        var j = mf((gridSize * mouseY) / canvas.height);
        var cell = cells[i + j * gridSize];
        cell.height = 1;
        cell.velocity = -0.2;
      }
    }

    canvas.addEventListener("mousedown", function(e) {
      mouseInteract = true;
      mouseX = e.offsetX;
      mouseY = e.offsetY;
    });
    canvas.addEventListener("mousemove", function(e) {
      mouseInteract = true;
      mouseX = e.offsetX;
      mouseY = e.offsetY;
    });
    canvas.addEventListener("mouseup", function(e) {
      mouseInteract = false;
    });

    canvas.addEventListener("mouseover", function(e) {
      mousein = true;
      interact = true;
      initialState();
      last();
    });

    canvas.addEventListener("mouseout", function(e) {
        mousein=false;
      interact = false;
      goaway();
    });

    function goaway() {
        return(
      c.fillStyle = "white",
      c.fillRect(0, 0, canvas.width, canvas.height),
      c2.fillStyle = "white",
      c2.fillRect(0, 0, canvas.width, canvas.height));
   
    }

    function random(min, max, decOrNot) {
      this.decOrNot = decOrNot;
      if (this.decOrNot === "y") {
        this.decOrNot = true;
      } else {
        this.decOrNot === false;
      }
      var num = mf(Math.random() * (max - min)) + min;
      if (this.decOrNot === true) {
        num = num + num / max;
      } else {
        num = num;
      }
      if (min < 0) {
        posOrNeg(num);
      }

      function posOrNeg(x) {
        var arr = [-1, 1];
        var posOrNeg = random(0, 1);
        return arr[posOrNeg] * x;
      }
      return num;
    }

    function last() {
      console.log("last");
      c2.clearRect(0, 0, canvas.width, canvas.height);
      c.clearRect(0, 0, canvas.width, canvas.height);
      load();
      c2.drawImage(canvas, 0, 0);

       
      anim();
   
      cellWidth = (1 / gridSize) * canvas.width + 0.5;
      cellHeight = (1 / gridSize) * canvas.height + 0.5;
    
    }
  });
</script>

<style>
  #canvas {
    margin: 25px 25px 25px 25px;
    border: 2pxx inset gray;
    box-shadow: 1px 2px 15px 2px black;
    width: 80vw;
  }
</style>

<div id="auth" class="page">
  <canvas id="canvas" />
  <canvas id="canvas2" />
</div>

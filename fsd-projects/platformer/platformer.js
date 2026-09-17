$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall


    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////
    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(350,300,700,200, "black")
createPlatform(525,600,350,20, "green")
createPlatform(1200,620,125,50, "green")
createPlatform(1050,480,125,20, "green")
createPlatform(1300,375,125,40,"green")
createPlatform(700,0,150,200,"green")
createPlatform(800,500,100,100,"white")
createBadPlatform(300,150,400,10,"white")
    // TODO 3 - Create Collectables
createCollectable("database",700,550)
createCollectable("database",1225,500)
createCollectable("database",200,400,0,0,0,300,25)
    
    // TODO 4 - Create Cannons
createCannon("right",700,1000,0.5,1)
createCannon("top",1225,1000,0.5,1)
createCannon("top",850,1000,0.5,1)
createCannon("top",175,0.1,50,50,0,375,10)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

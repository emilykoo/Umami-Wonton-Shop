var wonton1, wonton2, wonton3, wonton4;
var won1, won2, won3, won4;
var w1, w2, w3, w4;

var tables, curtains, bowls, table, curtain, bowl;
var amount = 0;
var stop = 0;


function preload() {
	// Set up background
  tables = loadImage('images/table.png');
  curtains = loadImage('images/curtain.png');
  bowls = loadImage('images/bowl.png');

  // Load wontons
  won1 = loadImage('images/won1.png');
  won2 = loadImage('images/won2.png');
  won3 = loadImage('images/won3.png');
  won4 = loadImage('images/won4.png');

  // Load font
  Goudy = loadFont('../Umami-Wonton-Shop/fonts/GoudyStM-webfont.ttf');
}


function setup() {
  createCanvas(600, 450);

	// create sprites
  bowl = createSprite(225, 390, width/4, height/4);
  bowl.addImage(bowls);

  w1 = new Group();
  w2 = new Group();
  w3 = new Group();
  w4 = new Group();

  fillGroup();
 }


function fillGroup() {
	// Assign sprites to groups
  for(var i = 0; i < random(0, 5); i++) {
  var neww1 = createSprite(random(0,width), 0);
  neww1.addImage(won1);
  w1.add(neww1);
  }
  
  for(var i = 0; i < random(0, 5); i++) {
  var neww2 = createSprite(random(0,width), 0);
  neww2.addImage(won2);
  w2.add(neww2);
  }

  for(var i = 0; i < random(0, 5); i++) {
  var neww3 = createSprite(random(0,width), 0);
  neww3.addImage(won3);
  w3.add(neww3);

  }

  for(var i = 0; i < random(0, 5); i++) {
  var neww4 = createSprite(random(0,width), 0);
  neww4.addImage(won4);
  w4.add(neww4);
  } 
}


function draw() {
  background(247, 249, 166);
  table = image(tables, 0, 400, width, height);
  total = w1.length + w2.length + w3.length + w4.length;

  var begin = "Click anywhere to begin!";
	fill(50);
	textFont(Goudy);
	textSize(18);
	text(begin, width/3, height/2);

  if (stop > 0) {
	  background(247, 249, 166);
	  table = image(tables, 0, 400, width, height);
		play();  
  }

  curtain = image(curtains, 0, 0, width, height/4);
}


function play() {
	bowl.position.x = mouseX;

  if (total > 0) {
	  console.log(w1.length, w2.length, w3.length, w4.length, total);
		
		var choose = floor(random(4));
		console.log("choose: ", choose);
	
		if (w1.length > 0) {
			for (var h = 0; h < w1.length; h++) {
  			wonton1 = w1[0];
  			wonton1.setSpeed(3, 90);
  			if (wonton1.collide(bowl)) {
  				wonton1.remove();
  				amount++;
  			} else if (wonton1.position.y > height + 50) {
  				wonton1.remove();
  			}
			}
		} 

		if (w2.length > 0) {
			for (var h = 0; h < w2.length; h++) {
  			wonton2 = w2[0];
  			wonton2.setSpeed(6, 90);
  			if (wonton2.collide(bowl)) {
  				wonton2.remove();
  				amount++;
  			} else if (wonton2.position.y > height + 50) {
  				wonton2.remove();
  			}
			}
		}

		if (w3.length > 0) {
			for (var h = 0; h < w3.length; h++) {
  			wonton3 = w3[0];
  			wonton3.setSpeed(4, 90);
  			if (wonton3.collide(bowl)) {
  				wonton3.remove();
  				amount++;
  			} else if (wonton3.position.y > height + 50) {
  				wonton3.remove();
  			}
			}
		}

		if (w4.length > 0) {
			for (var h = 0; h < w4.length; h++) {
  			wonton4 = w4[0];
  			wonton4.setSpeed(5, 90);
  			if (wonton4.collide(bowl)) {
  				wonton4.remove();
  				amount++;
  			} else if (wonton4.position.y > height + 20) {
  				wonton4.remove();
	 			}
			}
		}

		console.log("amount:", amount);
		
	} else {
			var string = "You caught " + amount + " wontons!";
			text(string, width/3, height/2);
			noLoop();
	}	

  drawSprites();
}

function mouseClicked() {
	// Draw once
  background(247, 249, 166);
  table = image(tables, 0, 400, width, height);
  fillGroup();

  amount = 0;
  stop = 1;

	loop();
	return false;
 }
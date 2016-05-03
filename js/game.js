var wonton1, wonton2, wonton3, wonton4;
var w1, w2, w3, w4;
var bowl;
var x = 225; 
var timer = 100;
var amount = 0;

function setup() {
  createCanvas(600, 450);

    // Set up background
  tables = loadImage('images/table.png');
  curtains = loadImage('images/curtain.png');
  bowls = loadImage('images/bowl.png');

  won1 = loadImage('images/won1.png');
  won2 = loadImage('images/won2.png');
  won3 = loadImage('images/won3.png');
  won4 = loadImage('images/won4.png');

	// create sprites
	  bowl = createSprite(x, 390, width/4, height/4);
	  bowl.addImage(bowls);

	  w1 = new Group();
	  w2 = new Group();
	  w3 = new Group();
	  w4 = new Group();

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

	for (var num = 0; timer == 0; num++) { 
	  choose = floor(random(4));
	  timer = timer-1;

	  console.log(choose);
  	console.log(timer, total, amount);	
		if (choose == 0) {
				console.log(0);
				if (w1.length > 0) {
					wonton1 = w1[0];
				  wonton1.setSpeed(3, 90);
				  if(wonton1.collide(bowl)) {
				  	wonton1.remove();
				  	amount++;
				  } 
			}
	 } else if (choose == 1) {
				console.log(1);
				if (w2.length > 0) {
					wonton2 = w2[0];
				  wonton2.setSpeed(5, 90);
				  if(wonton2.collide(bowl)) {
				  	wonton2.remove();
				  	amount++;
				  } 
				}
		} else if (choose == 2) {
				console.log(2);
				if (w3.length > 0) {
					wonton3 = w3[0];
				  wonton3.setSpeed(4, 90);
				  if(wonton3.collide(bowl)) {
			  	wonton3.remove();
			  	amount++;
					}				
				} 
		} else {
				console.log(3);
				if (w4.length > 0) {
					wonton4 = w4[0];
				  wonton4.setSpeed(2, 90);
				  if(wonton4.collide(bowl)) {
				  	wonton4.remove();
				  	amount++;
				  } 
				}
		}
	}

  drawSprites();
  curtain = image(curtains, 0, 0, width, height/4);
  bowl.position.x = mouseX;
}


function setup() {
  console.log('setting up');
  createCanvas(400, 400);
  // Create object
  walker = new Walker();
  background(255);

}

function draw() {

  walker.step();
  walker.display();
}

function Walker (){
	this.x = 150;
	this.y = 150;


	this.display = function(){
		stroke(0);
		point(this.x,this.y);
	}

	this.step = function(){
		var r = random(1);
		var posDiff = {x:mouseX-this.x, y:mouseY-this.y};

		// implement gaussian step size
		var stepSize = randomGaussian();
		var sd = 4;
		var mean = 2;

		stepSize = (stepSize*sd)+mean;

		console.log(stepSize);


		if (r < 0.25) {this.x+= stepSize;} 
		else if (r < 0.50) {this.x-=stepSize;} 
		else if (r < 0.75) {this.y+=stepSize;} 
		else {this.y-=stepSize;}
	}
}
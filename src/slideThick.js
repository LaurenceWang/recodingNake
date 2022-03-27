let squareArrayy=[];
let squareArrayo=[];
let squareArrayb =[];
let color = ['#eed420', '#df752a', '#3e7aae'];
let gap = 10; 
var state ; // declaration of mouse clic state 

let thickness; // declaration of border thickness variable

function setup() {
  createCanvas(500, 600);
  state=0;
  thickness = new Thick(); 
  let gui_thick = new dat.GUI(); // use of dat.gui for border thickess
  gui_thick.add(thickness, 't', 0.5, 25);

  for(let c=0; c<3; c++){  
    for(let i=5; i<36; i++){
      for(let j=5; j<36; j++){
        if(c==0){
          if( 
              random(1) < drawingProba((i+j), 10, 2) && 
              random(1) < drawingProba((i+j), 40, 4) && 
              random(1) < drawingProba((i+j), 70, 10)){

                squareArrayy.push(new Square(i*gap, j*gap, 100, color[c]));
            }
          }

        else if(c==1){
            if((i>9 && i < 17 && j>19) ){
              gap = 10.5
            }else{
              gap=10
            }

            if(
              random(1) < drawingProba((i+j), 10, 5) && 
              random(1) < drawingProba((i+j), 35, 2) && 
              random(1) <   drawingProba((i+j), 70, 16)){

            squareArrayo.push(new Square(i*gap, j*gap, 100, color[c]));
        }
        }

        else{
            gap=10

            if(
              random(1) < drawingProba((i+j), 10, 6) && 
              random(1) < drawingProba((i+j), 25, 4) && 
              random(1) < drawingProba((i+j), 40, 3) && 
              random(1) < drawingProba((i+j), 70, 14)){

            squareArrayb.push(new Square(i*gap, j*gap, 100, color[c]));
        }
        }
      }
    }
  }
} 

function draw() {
  background("#efeee9");
  noFill();
  strokeWeight(thickness.t);
  
  // depending on state, squares are printed in different order, it's 3 clic-periodic
  
  if (state%3===0){ // print usual square order 
    translate(mouseX*(-0.2), -0.1); // first layer is translated 
    for(let i=0; i<squareArrayy.length; i++){
    squareArrayy[i].render();
  }
    
    translate(mouseX*(0.2), 0.05); // second layer is translated 
    for(let i=0; i<squareArrayo.length; i++){
    squareArrayo[i].render();
  }
    
    translate(mouseX*0.3, 0.1); // third layer is translated 
    for(let i=0; i<squareArrayb.length; i++){
    squareArrayb[i].render();
  }
  }
  if (state%3===1){ // print squares in order blue-yellow-orange
    translate(mouseX*(-0.2), -0.1);
    for(let i=0; i<squareArrayb.length; i++){
    squareArrayb[i].render();
  }
    
    translate(mouseX*(0.2), 0.05);
    for(let i=0; i<squareArrayy.length; i++){
    squareArrayy[i].render();
  }
    
    translate(mouseX*0.3, 0.1);
    for(let i=0; i<squareArrayo.length; i++){
    squareArrayo[i].render();
  }
  }
  if(state%3===2){ // print squares in order orange-blue-yellow
    
    translate(mouseX*(-0.2), -0.1);
    for(let i=0; i<squareArrayo.length; i++){
    squareArrayo[i].render();  
    }
    
    translate(mouseX*(0.2), 0.05);
    for(let i=0; i<squareArrayb.length; i++){
    squareArrayb[i].render();
    }
    
    translate(mouseX*0.3, 0.1);
    for(let i=0; i<squareArrayy.length; i++){
    squareArrayy[i].render();
    }
  }
}


function Thick() {
	this.t = 2; // square thickness initialized to 2
}

class Square {
  constructor(x,y,sizeSquare, c) {
    this.x =x;
    this.y=y;
    this.sizeSquare = sizeSquare;
    this.c = c;
  }

  render() {
    stroke(this.c);
    rect(this.x, this.y, this.sizeSquare, this.sizeSquare);
  }
 
}


function mouseClicked() {
  state=state+1; // for each clic, state is incremented by 1
}

function keyPressed() {
  state=state+1; // for any key pressed, state is incremented by 1
}

function drawingProba(x, mu, sigma){
  return 1/(sigma*sqrt(2*PI)*exp(-0.5*((x-mu)/sigma)**2));
}
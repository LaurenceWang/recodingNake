
let layer0=[];
let layer1=[];
let layer2=[];
let gap = 10; 
const gui = new dat.GUI();

const probaParams={
  layer0 : {sigma0:0, sigma1:0, sigma2:0},
  layer1 : {sigma0:0, sigma1:0, sigma2:0},
  layer2 : {sigma0:0, sigma1:0, sigma2:0},
};

let coords ={
  layer0 :{firstLx:0, firstLy:0},
  layer1 :{secondLx:0, secondLy:0},
  layer2 :{thirdLx:0, thirdLy:0},
};

const boolHide={
  hide0 : true,
  hide1 : true,
  hide2 : true
}

const gridColors={
  background : "#efeee9",
  firstL: "#eed420",
  secondL:"#df752a",
  thirdL: "#3e7aae",
}

gui.addColor(gridColors,"background");
gui.addColor(gridColors,"firstL");
gui.addColor(gridColors,"secondL");
gui.addColor(gridColors,"thirdL");


gui.add(coords.layer0,"firstLx", -500, 500, 1);
gui.add(coords.layer0,"firstLy", -500, 600, 1);
gui.add(coords.layer1,"secondLx", -500, 500, 1);
gui.add(coords.layer1,"secondLy", -500, 600, 1);
gui.add(coords.layer2,"thirdLx", -500, 500, 1);
gui.add(coords.layer2,"thirdLy", -500, 600, 1);

function setup() {
	createCanvas(500, 600);
}


function draw() {
	background(gridColors.background);
    noFill();
    strokeWeight(2);
   
  push();
  stroke(gridColors.firstL)
  translate(coords.layer0.firstLx, coords.layer0.firstLy);
  for(let i=0; i<layer0.length; i++){
    layer0[i].render()
  }
  pop();
  push();
  stroke(gridColors.secondL)
  translate(coords.layer1.secondLx, coords.layer1.secondLy);
  for(let j=0; j<layer1.length; j++){
    layer1[j].render()
  }
  pop();
  push();
  stroke(gridColors.thirdL)
  translate(coords.layer2.thirdLx, coords.layer2.thirdLy);
  for(let k=0; k<layer2.length; k++){
    layer2[k].render()
  }
  pop();
}



class Square {
  constructor(x,y,sizeSquare) {
    this.x =x;
    this.y=y;
    this.sizeSquare = sizeSquare;
  }

  render() {
    rect(this.x, this.y, this.sizeSquare, this.sizeSquare);
  }
 
}


function drawGrid(layer, mu1, sigma1, mu2, sigma2, mu3, sigma3){
   
  for(let i=5; i<36; i++){
    for(let j=5; j<36; j++){
      if( 
            random(1) < drawingProba((i+j), mu1,sigma1) 
            && random(1) < drawingProba((i+j), mu2, sigma2)
        && random(1) < drawingProba((i+j), mu3, sigma3)
        )
        { 
            layer.push(new Square(i*gap, j*gap, 100));
        
              
        
  }
      
}
  }
}
function drawingProba(x, mu, sigma){
  return 1/(sigma*sqrt(2*PI)*exp(-0.5*((x-mu)/sigma)**2));
}
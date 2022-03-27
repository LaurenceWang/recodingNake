let squareArray =[];
let color = ['#eed420', '#df752a', '#3e7aae'];
let gap = 10; 
function setup() {
  createCanvas(500, 600);

for(let c=0; c<3; c++){  
  for(let i=5; i<36; i++){
    for(let j=5; j<36; j++){
      if(c==0){
        if( 
            random(1) < drawingProba((i+j), 10, 2) && 
            random(1) < drawingProba((i+j), 40, 4) && 
            random(1) < drawingProba((i+j), 70, 10)){
          
              squareArray.push(new Square(i*gap, j*gap, 100, color[c]));
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
            
          squareArray.push(new Square(i*gap, j*gap, 100, color[c]));
      }
      }
      
      else{
          gap=10
        
          if(
            random(1) < drawingProba((i+j), 10, 6) && 
            random(1) < drawingProba((i+j), 25, 4) && 
            random(1) < drawingProba((i+j), 40, 3) && 
            random(1) < drawingProba((i+j), 70, 14)){
            
          squareArray.push(new Square(i*gap, j*gap, 100, color[c]));
      }
      }
    }
  }
}
} 

function draw() {
  noFill();
  strokeWeight(2);
  background("#efeee9");
    for(let i=0; i<squareArray.length; i++){
    squareArray[i].render();
  }
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

function drawingProba(x, mu, sigma){
  return 1/(sigma*sqrt(2*PI)*exp(-0.5*((x-mu)/sigma)**2));
}
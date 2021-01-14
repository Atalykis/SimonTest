class Plateau{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.squareGrid = [];
    this.patern = [];
  }

  initPlateau(){
    for(let i = 0;i< this.x ;i++){
      for(let j = 0;j< this.y ;j++){
        const square = new Square('red')
        const position = { 
            x : i,
            y : j
         }
        this.squareGrid.push(
          {
            position,
            square
          });

      }
    }
  }

  initPatern(numberOfSquare){

    for(let i = 0 ; i<numberOfSquare; i++){
      const px = Math.floor(Math.random()*this.x);
      const py = Math.floor(Math.random()*this.y);
      const position = {
        x : px,
        y : py
      }
    this.patern.push(position)
    }
  }



}
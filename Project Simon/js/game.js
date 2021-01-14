class Game{
    constructor(){
      this.difficulty = 1;
      this.plateau = [];
      this.Timer = [];
      this.userInput= [];
    }

    initPlateau(){
      const value = Math.floor((this.difficulty)/3);
      this.plateau = new Plateau(2+value,2+value);
    }

    userOnClick(){
      //ajouter un objet avec x et y en argument dans un tableau userInput
    }

    clignote(){
      let i = 0;
      setTimeout(() => {
       const p = this.plateau.patern[i]
       this.plateau.squareGrid.find(element => element[0] === p)
      }, 500);
    }

}
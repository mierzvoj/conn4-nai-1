class Game {
  //Game class constructor, creates classes Grid and AI objects, together with 
  //humanTurn variable assigment
  constructor() {
    this.grid = new Grid();
    this.humanTurn = 1;
    this.AI = new AI();

  }
  //Function move, for given x argument finds and returns first empty y coordinated cell, marks it
  // with 1 (humanTurn), sets turn to AI, calls AI move, checks for winner in between code lines 18 and 21
  //Parameters: x : number
  move(x) {
    var y = this.grid.getFirstEmpty(x);
    if(y==-1)
      return 0;
    if(this.humanTurn){
      this.grid.setElement(1,y,x);
      this.humanTurn = 0;
      this.checkWinner();
      this.AImove();
      this.checkWinner();
    }


  }
  //Applies x coordinated bestMove, applies it to first x coordinated empty cell on the grid
  //Parameters: none, returns: void
  AImove(){
      var x = this.AI.bestMove(this.grid);
      var y = this.grid.getFirstEmpty(x);
      this.grid.setElement(2,y,x);
      this.humanTurn = 1;
  }
  //winner check for human 1 or AI 2, announces winner as JS alert
  //Parameters: none, return: void
  checkWinner() {
    var winner = this.grid.checkWinner();
    if(winner==1){
      alert("YOU WON\nRealod page to play again");
      console.log("1 won");
    }
    else if(winner == 2){
      alert("AI WON\nRealod page to play again");
      console.log("2 Won")
    }
  }

}

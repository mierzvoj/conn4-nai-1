class Grid {
  // Class Grid constructor, sets required game board boundary coordinates, sets grid itself as an empty array,
  //then adds second Y coordinate to make a square grid 
  constructor() {
    this.maxY = 6;
    this.maxX = 7;
    this.grid = [];
    for(let y=0;y<this.maxY;y++){
      this.grid[y] = new Array(this.maxX);
    }
    this.emptyGrid()
  }
  //Sets grid element as taken by either AI or human, 
  //Parameters: who: number, x: number, y: nubmer
  setElement(who,y,x) {
    this.grid[y][x] = who;
  }
  //Returns grid cell for given ooordinates,  
  //Parameters y, x: number, returns: array[][] type: number, 
  
  getElement(y,x){
    if(y<this.maxY && y>=0 && x<this.maxX && x >=0)
      return this.grid[y][x];
    return -1;
  }
  //Fills grid with 0 
  //Parameters: none, Returns: void, 
  emptyGrid() {
    for(let y=0;y<this.maxY;y++){
      for(let x=0;x<this.maxX;x++){
        this.grid[y][x] = 0;
      }
    }
  }
  //Finds first empty y coordinated cell for given x 
  //Parameter x: number, returns y: number, 
 
  getFirstEmpty(x) {
    for(var y=this.maxY-1;y>=0;y--){
      if(this.grid[y][x]==0){
        return y;
      }
    }
    return -1;
  }
  //Winner check function, browses all game board and checks cells setup logic for win condition, 
  //Parameter: none, returns getElement(y, x) where y and x are numbers    
  checkWinner(){
    for(var y=0;y<this.maxY;y++){
      for(var x=0;x<this.maxX;x++){
        if(this.isWinning(y,x)){
          return this.getElement(y,x);
        }
      }
    }
    return -1;
  }
  //Winning geometry logic setup 
  isWinning(y,x){
    if(this.getElement(y,x) != 0){
      if(
        this.getElement(y,x)==this.getElement(y,x+1) &&
        this.getElement(y,x)==this.getElement(y,x+2) &&
        this.getElement(y,x)==this.getElement(y,x+3)
      ){
        return true;
      }
      if(
        this.getElement(y,x)==this.getElement(y+1,x) &&
        this.getElement(y,x)==this.getElement(y+2,x) &&
        this.getElement(y,x)==this.getElement(y+3,x)
      ){
        return true;
      }
      if(
        this.getElement(y,x)==this.getElement(y+1,x+1) &&
        this.getElement(y,x)==this.getElement(y+2,x+2) &&
        this.getElement(y,x)==this.getElement(y+3,x+3)
      ){
        return true;
      }
      if(
        this.getElement(y,x)==this.getElement(y+1,x-1) &&
        this.getElement(y,x)==this.getElement(y+2,x-2) &&
        this.getElement(y,x)==this.getElement(y+3,x-3)
      ){
        return true;
      }
    }
    return false;
  }
}

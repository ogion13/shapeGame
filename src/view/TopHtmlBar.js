export default class TopHtmlBar {
  constructor(model){
    this.shapesAmount = document.getElementById('shapesAmount');
    this.shapesSquare = document.getElementById('shapesSquare');
  }
  refreshShapesAmount(shapesAmount){
   this.shapesAmount.innerHTML = shapesAmount;
  }
  refreshShapesSquare(shapesSquare){
   this.shapesSquare.innerHTML = shapesSquare;
  }
  
};   

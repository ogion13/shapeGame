import Phaser from 'phaser'
import Circle from '../view/shapes/Circle'
import Ellipse from '../view/shapes/Ellipse'
import Triangle from '../view/shapes/Triangle'
import Rectangle from '../view/shapes/Rectangle'
import Shape5side from '../view/shapes/Shape5side'
import Shape6side from '../view/shapes/Shape6side'
import TopHtmlBar from '../view/TopHtmlBar'
import ValueSelector from '../view/ValueSelector'

export default class GameView {
  constructor(game,model){
    this.game = game;
    this.model = model;
    this.model.shapeAdded.attach(this.fillView.bind(this));
    this.model.shapeRemoved.attach(this.fillView.bind(this));
    this.model.squareRefreshed.attach(this.squareRefresh.bind(this));
    this.model.shapesPerSecondEvent.attach(this.shapesPerSecondRefresh.bind(this));
    this.model.gravityEvent.attach(this.gravityRefresh.bind(this));
    this.bg =  new Phaser.Graphics(this.game,0,0); 
    this.bg.beginFill('#000000');
    this.bg.drawRect(0, 0, this.model.gameConfig.gameWidth,this.model.gameConfig.gameHeight);
    this.bg.endFill();
    this.game.add.existing(this.bg);
    this.bg.inputEnabled = true;
    this.topHtmlBar = new TopHtmlBar();
    this.gravitySelector = new ValueSelector('gravitySelector');
    this.shapesPerSecondSelector = new ValueSelector('shapesSelector');
  }
  addShape(shapeData){
    let shape;
    switch (shapeData.type){
      case 'circle':
        shape = new Circle(this.game,shapeData);
        break;
      case 'triangle':
        shape = new Triangle(this.game,shapeData);
        break;
      case 'rectangle':
        shape = new Rectangle(this.game,shapeData);
        break;
      case '5sides':
        shape = new Shape5side(this.game,shapeData);
        break;
      case '6sides':
        shape = new Shape6side(this.game,shapeData);
        break;
      case 'ellipse':
        shape = new Ellipse(this.game,shapeData);
        break;
    }
    this.game.add.existing(shape);
    shape.events.onInputDown.add(this.shapeClick);
    return shape;
  }
  fillView(){
    for (let i = 0; i < this.model.shapes.length; i++) {
      let shapeData = this.model.shapes[i];
      if(!shapeData.obj){
        shapeData.obj = this.addShape(shapeData);
      }
    }
    this.topHtmlBar.refreshShapesAmount(this.model.shapes.length);
  }
  removeShape(){
    this.topHtmlBar.refreshShapesAmount(this.model.shapes.length);
  }
  squareRefresh(){
    this.topHtmlBar.refreshShapesSquare(this.model.shapesSquare);
  }
  gravityRefresh(){
    this.gravitySelector.refreshValue(this.model.gravity);
  }
  shapesPerSecondRefresh(){
    this.shapesPerSecondSelector.refreshValue(this.model.shapesPerSecond);
  }
};   

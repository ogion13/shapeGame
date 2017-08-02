import Phaser from 'phaser'
import Observer from '../common/Observer'

export default class GameModel {
  constructor(game,config){
    this.game = game;
    this.shapeNumber = 0;
    this.gameConfig = config;
    this.gravity = config.gravity;
    this.shapesPerSecond = config.shapesPerSecond;
    this.figuresAmount = config.figuresAmount;
    this.shapesTypes = config.shapesTypes;
    this.gameWidth = config.gameWidth;
    this.shapes = [];
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = this.gravity;
    this.shapeAdded = new Observer(this);
    this.shapeRemoved = new Observer(this);
    this.squareRefreshed = new Observer(this);
    this.shapesPerSecondEvent = new Observer(this);
    this.gravityEvent = new Observer(this);
  }
  startGame(){
    this.gameInterval = this.game.time.events.loop(Phaser.Timer.SECOND/this.shapesPerSecond, this.addRandomShape, this);
  }
  addRandomShape(){
     let xCoord,
         yCoord;
      xCoord = this.game.rnd.integerInRange(50, this.gameWidth-50);
      yCoord = this.game.rnd.integerInRange(-100, 50);
      this.createShape(xCoord,yCoord);
      this.checkShapesOutCanvas();
  }
  checkShapesOutCanvas(){
    this.shapesSquare = 0;
    for (let i = 0; i < this.shapes.length; i++) {
      let shape = this.shapes[i].obj;
      if(shape.y>this.gameConfig.gameHeight){
        shape.destroy();
        this.shapes.splice(i, 1);
        this.shapeRemoved.notify();
      }
      else{
        this.shapesSquare += shape.square;
      }
    }
    this.squareRefreshed.notify();

  }
  createShape(x,y){
    let shape = {};
    shape.type = Phaser.ArrayUtils.getRandomItem(this.shapesTypes);
    shape.xCoord = x;
    shape.yCoord = y;
    shape.color = this.randomColor();
    shape.id = this.shapeNumber++;
    this.shapes.push(shape);
    this.shapeAdded.notify();        
  }
  removeShape(shapeId){
    let shape;
    for (let i = 0; i < this.shapes.length; i++) {
      let shape = this.shapes[i];
      if(shape.id==shapeId){
        this.shapes[i].obj.destroy();
        this.shapes.splice(i, 1);
        this.shapeRemoved.notify();
      }
    }
    this.calculateSquare();
  }
  calculateSquare(){
    this.shapesSquare = 0;
    for (let i = 0; i < this.shapes.length; i++) {
      let shape = this.shapes[i].obj;
     this.shapesSquare += shape.square;
    }
    this.squareRefreshed.notify();
  }
  randomColor(){
    let red,
        green,
        blue,
        finalColor;
    red = this.game.rnd.integerInRange(30, 255);
    green = this.game.rnd.integerInRange(30, 255);
    blue = this.game.rnd.integerInRange(30, 255);
    finalColor = Phaser.Color.getColor(red, green, blue);
    return finalColor;
  }
  gravityChange(increase){
    if(increase){
      this.gravity+=100;
    }
    else{
      if(this.gravity>100){
        this.gravity-=100;
      }
    }
    this.game.physics.arcade.gravity.y = this.gravity;
    this.gravityEvent.notify();
  }
  shapesPerSecondChange(increase){
    if(increase&&this.shapesPerSecond<100){
      this.shapesPerSecond++;
    }
    else{
      if(this.shapesPerSecond>1){
       this.shapesPerSecond--;
      }
    }
    this.game.time.events.remove(this.gameInterval);
    this.startGame();
    this.shapesPerSecondEvent.notify();
  }
};   
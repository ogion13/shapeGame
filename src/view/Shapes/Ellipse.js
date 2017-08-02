import Phaser from 'phaser'
export default class Ellipse extends Phaser.Graphics{
  constructor(game,{color,xCoord,yCoord,id}){
  	super(game,xCoord,yCoord);
  	this.id = id;
    this.square = 25; //random number not calculated
  	this.beginFill(color);
    this.drawEllipse(0, 0, 100,60);
    this.endFill();
    this.inputEnabled = true;
    this.input.useHandCursor = true;
    this.hitArea = new Phaser.Circle(0, 0, 200);
    this.game.physics.enable( this, Phaser.Physics.ARCADE);
  }
  
};   
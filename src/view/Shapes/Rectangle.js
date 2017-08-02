import Phaser from 'phaser'
export default class Rectangle extends Phaser.Graphics{
  constructor(game,{color,xCoord,yCoord,id}){
  	super(game,xCoord,yCoord);
  	this.id = id;
    this.square = 35; //random number not calculated
  	this.beginFill(color);
    this.drawRect(-75, -50, 150, 100);
    this.endFill();
    this.inputEnabled = true;
    this.input.useHandCursor = true;
    this.game.physics.enable( this, Phaser.Physics.ARCADE);
  }
 
};   
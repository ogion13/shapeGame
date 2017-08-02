import Phaser from 'phaser'
export default class Circle extends Phaser.Graphics{
  constructor(game,{color,xCoord,yCoord,id}){
  	super(game,xCoord,yCoord);
  	this.id = id;
    this.square = 20; //random number not calculated
  	this.beginFill(color);
    this.drawCircle(0, 0, 100);
    this.endFill();
    this.inputEnabled = true;
    this.input.useHandCursor = true;
    this.game.physics.enable( this, Phaser.Physics.ARCADE);
  }
 
};   
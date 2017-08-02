import Phaser from 'phaser'
export default class Triangle extends Phaser.Graphics{
  constructor(game,{color,xCoord,yCoord,id}){
  	super(game,xCoord,yCoord);
  	this.id = id;
    this.square = 27; //random number not calculated
  	this.beginFill(color);
    this.drawPolygon([-50, -50, 
                      50, -50,
                      0, 50
                    ]);
    this.endFill();
    this.inputEnabled = true;
    this.input.useHandCursor = true;
    this.game.physics.enable( this, Phaser.Physics.ARCADE);
   
  }
 
};   
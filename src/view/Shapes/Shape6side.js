import Phaser from 'phaser'
export default class Shape6side extends Phaser.Graphics{
  constructor(game,{color,xCoord,yCoord,id}){
  	super(game,xCoord,yCoord);
  	this.id = id;
  	this.beginFill(color);
    this.square = 45; //random number not calculated
    this.drawPolygon([-50, -100, 
                      50, -100,
                      100, -50,
                      100, 0,
                      50,50,
                      -50,50,
                      -100,0,
                      -100,-50
                    ]);
    this.endFill();
    this.inputEnabled = true;
    this.input.useHandCursor = true;
    this.game.physics.enable( this, Phaser.Physics.ARCADE);
  }
  
};   
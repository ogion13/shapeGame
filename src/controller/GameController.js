export default class Controller{
	constructor(game,model, view){
		this.game = game;
		this.model = model;
		this.view = view;
		this.view.shapeClick = this.shapeClick.bind(this);
		this.view.bg.events.onInputDown.add(this.addShape, this);
		this.view.gravitySelector.degreaseButton.onclick  = this.degreaseGravity.bind(this);
		this.view.gravitySelector.increaseButton.onclick  = this.increaseGravity.bind(this);
		this.view.shapesPerSecondSelector.degreaseButton.onclick  = this.degreaseShapesPerSecond.bind(this);
		this.view.shapesPerSecondSelector.increaseButton.onclick  = this.increaseShapesPerSecond.bind(this);
	}
	shapeClick(shape){
		this.model.removeShape(shape.id);
	}
	addShape(event){
		this.model.createShape(this.game.input.x,this.game.input.y);
	}
	increaseGravity(){
		this.model.gravityChange(true);
	}
	degreaseGravity(){
		this.model.gravityChange(false);
	}
	degreaseShapesPerSecond(){
		this.model.shapesPerSecondChange(false);
	}
	increaseShapesPerSecond(){
		this.model.shapesPerSecondChange(true);
	}

    
};        
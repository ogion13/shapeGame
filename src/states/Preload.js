import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {
    // some state init manipulations
  }

  preload () {
    this.game.stage.disableVisibilityChange = true;
    //Loading Sprites and Images

   



    //Loading Sounds

    
   
  }

  create () {
   this.state.start('Game');
  }

}

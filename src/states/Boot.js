import Phaser from 'phaser'
import gameConfig from '../common/gameConfig'

export default class extends Phaser.State {
  init () {
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL//Phaser.ScaleManager.EXACT_FIT//Phaser.ScaleManager.RESIZE// //Phaser.ScaleManager.USER_SCALE;//
    this.game.scale.setMinMax(0, 0, 800, 600); 
    this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    this.game.scale.setResizeCallback(this.doRescale.bind(this), this.game);
  }

  preload () {
    game.state.start('Preload');


  }
  doRescale(){
    let width = window.innerWidth;
    let height = window.innerHeight-60;
    let maxWidth = height*4/3;
    let maxHeigh = height;
    this.scale.setMinMax(0, 0, maxWidth, maxHeigh);
    let marginL = this.game.canvas.style.marginLeft;
    let $gameDataElem = document.getElementsByClassName('game-data');
    for (let i = 0; i < $gameDataElem.length; i++) {
      $gameDataElem[i].style.marginLeft = marginL; 
    }
   
  }

  render () {
    
  }


}

/* globals __DEV__ */
import Phaser from 'phaser'
import gameConfig from '../common/gameConfig'
import GameModel from '../model/GameModel'
import GameView from '../view/GameView'
import GameController from '../controller/GameController'


export default class extends Phaser.State {
  init () {}
  preload () {
  }

  create () {
    game.time.advancedTiming = true;
    this.gameModel = new GameModel(this.game,gameConfig);
    this.gameView = new GameView(this.game,this.gameModel);
    this.gameController = new GameController(this.game,this.gameModel,this.gameView);
    this.gameModel.startGame();  
  }


  render(){
  
  }
  
}

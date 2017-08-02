import 'pixi'
import 'p2'
import Phaser from 'phaser'
import BootState from './states/Boot'
import PreloadState from './states/Preload.js'
import GameState from './states/Game'
import gameConfig from './common/gameConfig'



class Game extends Phaser.Game {

      constructor () {
        super(gameConfig.gameWidth, gameConfig.gameHeight, Phaser.CANVAS, 'canvas', null);
        this.state.add('Boot', BootState, false);
        this.state.add('Preload', PreloadState, false);
        this.state.add('Game', GameState, false);
        this.state.start('Boot');  
      }
}
window.game = new Game();

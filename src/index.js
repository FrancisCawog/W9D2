import View from "./ttt-view"
import Game from '../ttt_node/game';

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const container = document.querySelector('.container');
  const view = new View(game, container);
});
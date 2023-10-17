import Game from '../ttt_node/game';
 
 class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }
  
  setupBoard() {
    const board = document.querySelector(".ttt");
    let ul = document.createElement('ul')
    let li = document.createElement('li');
    for (let i = 0; i < 9; i++) {
      li = document.createElement('li')
      li.innerText = ''
      li.addEventListener('click', this.handleClick.bind(this));
      ul.append(li);
    };
    board.append(ul);
    
  }
  
  handleClick(e) {

    let liClick = e.target;

    this.makeMove(liClick)

    
  }

  makeMove(square) {

    if (square.innerText === "") {
      this.game.playMove.currentPlayer
    }
    else {
      this.makeMove(square)
    }

    

  }
  
  handleGameOver() {
  }
}

export default View;
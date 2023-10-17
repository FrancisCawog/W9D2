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
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        li = document.createElement('li')
        li.innerText = ''
        li.dataset.row = i;
        li.dataset.col = j;
        li.addEventListener('click', this.handleClick.bind(this));
        ul.append(li);
      }
    };
    board.append(ul);
    
  }
  
  handleClick(e) {
    let liClick = e.target;

    if (liClick.innerText === "") {
      this.makeMove(liClick);
    }
  }


  makeMove(square) {
    if (square.innerText === "") {
      square.innerText = this.game.currentPlayer;
      square.classList.add(this.game.currentPlayer === 'x' ? 'x-mark' : 'o-mark');
      this.game.playMove([parseInt(square.dataset.row), parseInt(square.dataset.col)]);
    }
  
    if (this.game.isOver()) {
      this.handleGameOver();
    }
  }
  

  handleGameOver() {
    const result = this.game.winner();
    if (result) {
      alert(`${result} has won!`);
    } else {
      alert('It\'s a draw! No one wins.');
    }
  }
}

export default View;
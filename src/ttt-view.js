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
    ul.append(li);
    board.append(ul);
    li.innerText = 'hello world'
  }
  
  handleClick(e) {
    
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;
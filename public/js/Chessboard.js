window.Square = React.createClass({
  render: function() {
    var x = this.props.x, y = this.props.y, val = this.props.val;
    var piece = val.piece, selected = val.selected;
    var divStyle = {
      position: 'absolute',
      left: (x * 12.5) + '%',
      top: (y * 12.5) + '%',
    }
    if (piece != '') {
      divStyle.backgroundImage = 'url(/images/' + piece + '.png)';
    }
    return (
      <div 
        style={divStyle} 
        className={'square ' + (selected ? 'selected' : '')}
        x={x}
        y={y}
        onClick={this.props.onClick}
      />
    )
  }
});

var initialSetup = [
  ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
  ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],  
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],  
  ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR'],
];
window.Chessboard = React.createClass({
  /* state = {
    squares = [square = {
      piece: {pieceType} / null, 
    }]
  }
  */

  getInitialState: function() {
    var squares = [];
    for (var i = 0; i < 8; ++i) {
      for (var j = 0; j < 8; ++j) {
        squares.push({
          piece: initialSetup[i][j],
        });
      }
    }
    return {squares: squares};
  },

  handleChangeBoard: function(squares) {
    this.setState({squares: squares});
  },

  handleClick: function(i) {
    var canSelect = function(square) {
      return square.piece != '';
    }
    var canMove = function(square) {
      return true;
    }
    var deselect = function() {
      if (selectedSquare) {
        selectedSquare.selected = false;
        selectedSquare = null;
      }
    }
    var select = function(square) {
      deselect();
      square.selected = true;
      selectedSquare = square;
    }
    var doMove = function(source, dest) {
      dest.piece = source.piece;
      source.piece = '';
    }

    print('clicked', i);
    var squares = this.state.squares;
    var selectedSquare = this.state.selectedSquare;
    var moveDests = {};
    if (selectedSquare) {
      if (selectedSquare == squares[i]) { // deselect
        deselect();
      } else {
        if (canMove(selectedSquare, squares[i])) { // move
          doMove(selectedSquare, squares[i]);
          deselect();
        } else if (canSelect(squares[i])) { // reselect
          select(squares[i]);
        } else { // deselect
          deselect();
        }
      }
    } else {
      if (canSelect(squares[i])) {
        select(squares[i]);
      }
    }

    this.setState({squares, selectedSquare, moveDests});
  },

  render: function() {
    var handleClick = this.handleClick;
    return (
      <div className="board">
        {
          this.state.squares.map(function(square, i) {
            return (
              <Square
                onClick={this.handleClick.bind(this, i)}
                x={i%8}
                y={Math.floor(i/8)}
                val={square}
                key={i}
              />
            );
          }, this)
        }
      </div>
    );
  }
});

var Square = React.createClass({
  render: function() {
    var x = this.props.x, y = this.props.y, val = this.props.val;
    var piece = val.piece, color = val.squareColor;
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
        className='square'
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
      piece: {pieceType, color} / null, 
      squareColor: light/dark,
    }]
  }
  */

  getInitialState: function() {
    var squares = [];
    for (var i = 0; i < 8; ++i) {
      for (var j = 0; j < 8; ++j) {
        squares.push({
          piece: initialSetup[i][j],
          squareColor: (i + j) % 2 == 1 ? 'black': 'white',
        });
      }
    }
    return {squares: squares};
  },

  handleChangeBoard: function(squares) {
    this.state.squares = squares;
  },

  render: function() {
    return (
      <div className="board">
        {
          this.state.squares.map(function(square, i) {
            return (
              <Square
                x={i%8}
                y={Math.floor(i/8)}
                val={square}
                key={i}
              />
            );
          })
        }
      </div>
    );
  }
});

var darkColor = 'blue';
var lightColor = 'white';
var Square = React.createClass({
  render: function() {
    var x = this.props.x, y = this.props.y, val = this.props.val;
    var piece = val.piece, color = val.squareColor;
    print('rendering', this.props);
    return (
      <div style={{
          position: 'absolute',
          left: (x * 12.5) + '%',
          top: (y * 12.5) + '%',
          width: '12.5%',
          height: '12.5%',
        }}
      >
      </div>
    )
  }
});

window.Chessboard = React.createClass({
  /* state: {
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
          piece: null, 
          squareColor: (i + j) % 2 == 1 ? 'black': 'white'
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
                x={Math.floor(i/8)}
                y={i%8}
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

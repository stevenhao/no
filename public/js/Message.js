window.Message = React.createClass({
  render: function() {
    var divStyle = {maxWidth:'95%', margin: 'auto', borderRadius: '5px', marginTop: '10px', marginBottom: '10px',backgroundColor: '#dff0d8', border: '1px solid', borderColor: '#d6e9c6', paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', color: '#468847'};
    return (
      <div className="container">
        <div style={divStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
});
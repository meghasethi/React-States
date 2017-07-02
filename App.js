//Import the react liabraies
import React from 'react';
import ReactDOM from 'react-dom';

var light_brown = '#564b42';
var dark_brown = '#aa8d75';

// Create component class named Toggle. Here we have defined the getInitialState method to set the initial state and set the new state in changeColor method.
var Toggle = React.createClass({
  getInitialState : function(){
    return { color: light_brown };
  },
  changeColor : function(){
    var newColor = this.state.color == light_brown ? dark_brown : light_brown;
    this.setState({ color: newColor });
  },
  render: function () {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick = {this.changeColor}>
          Change color
        </button>	
      </div>
    );
  }
});

// Rendering Toggle component instance in html body
ReactDOM.render(<Toggle />,document.getElementById('app'));

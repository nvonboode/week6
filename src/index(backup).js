// DO NOT MODIFY ANYTHING BETWEEN LINES 1-33. NO REALLY.
// React
var React = require('react');
var ReactDOM = require('react-dom');

// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END OF STUFF TO NOT MODIFY

var getCard = React.createClass({
  dealClicked: function() {
    this.props.dealClicked(this.props.getDeck)
  }
})

var random1 = React.createClass({
  render: function() {
    return (
      this.props.getDeck.shuffle[0]
    )
  }
})

var Card1 = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + this.props.getDeck + ".png"} /></h1>
        </div>
      </div>
    )
  }
})

var Card2 = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/ace_of_hearts.png"} /></h1>
        </div>
      </div>
    )
  }
})

var Card3 = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/ace_of_hearts.png"} /></h1>
        </div>
      </div>
    )
  }
})

var Card4 = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/ace_of_hearts.png"} /></h1>
        </div>
      </div>
    )
  }
})

var Card5 = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/ace_of_hearts.png"} /></h1>
        </div>
      </div>
    )
  }
})

var App = React.createClass({
  dealClicked: function(getCard) {
    alert(getCard + "was clicked!")
  },
  render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))


var CounterDisplay = React.createClass({
  getInitialState: function() {
    return {
      number: 5
    }
  },

  increase: function() {
    this.setState({
      number: this.state.number + 1
    });
  },

  decrease: function() {
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1
      });
    }
  },

  render: function() {
    return(
      <div>
        <p>I have <span id="number">{this.state.number}</span> items in store.</p>
        <Button
          className="button"
          id="increase"
          label="+"
          clickHandler={this.increase}/>

        <Button
          className="button"
          id="decrease"
          label="-"
          clickHandler={this.decrease}/>
      </div>
    );

  }
});


var Button = React.createClass({
  passClick: function(event) {
    this.props.clickHandler();
  },

  render: function() {
    return(
      <button className={this.props.className} id={this.props.id} onClick={this.passClick}>
        {this.props.label}
      </button>
    );
  }
});

React.render(<CounterDisplay name="John" />,
  document.getElementById('container')
);
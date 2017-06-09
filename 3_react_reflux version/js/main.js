(function() {
  // Actions
  var Actions = Reflux.createActions(["increase", "decrease"]);

  var _number = 5;

  // Store
  var Store = Reflux.createStore({
    init: function() {
      this.listenTo(Actions.increase, this.onIncrease);
      this.listenTo(Actions.decrease, this.onDecrease);
    },

    // increase
    onIncrease: function() {
      _number++;
      this.trigger(_number);
    },

    // decrease
    onDecrease: function() {
      if (_number > 0) {
        _number--;
        this.trigger(_number);
      }
    },

    // getter
    getNumber: function() {
      return _number;
    }
  });

  // Components
  var CounterDisplay = React.createClass({
    getInitialState: function() {
      // get initial state from Store
      return { number: Store.getNumber() };
    },

    onChange: function(number) {
      // onChange is paired with Store's trigger
      this.setState({
        number: number
      });
    },

    componentDidMount: function() {
      this.unsubscribe = Store.listen(this.onChange);
    },

    componentWillUnmount: function() {
      this.unsubscribe();
    },

    render: function() {
      return (
        <div>
          <p>
            I have <span id="number">{this.state.number}</span> items in store.
          </p>
          <Button className="button" id="increase" label="+" type="add" />
          <Button className="button" id="decrease" label="-" type="sub" />
        </div>
      );
    }
  });

  var Button = React.createClass({
    handleClick: function() {
      if (this.props.type === "add") {
        Actions.increase();
      } else if (this.props.type === "sub") {
        Actions.decrease();
      }
    },

    render: function() {
      return (
        <button
          className={this.props.className}
          id={this.props.id}
          onClick={this.handleClick}
        >
          {this.props.label}
        </button>
      );
    }
  });

  // render to the browser
  React.render(
    <CounterDisplay name="John" />,
    document.getElementById("container")
  );
})();

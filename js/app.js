var React = require('react');
var ReactDOM = require('react-dom');

var News = React.createClass({
  render: function() {
    return (
      <div>Just Testing!!!!
        <h1>Hello!</h1>
      </div>
    );
  },
});

ReactDOM.render(
  <News />,
  document.getElementById('container')
);

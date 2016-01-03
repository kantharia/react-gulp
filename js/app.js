var React = require('react');
var ReactDOM = require('react-dom');

var News = React.createClass({
  render: function() {
    return (
      <div>Just Testing!!!!
        <h1>Hello222!</h1>
        <NewsComponent />
      </div>
    );
  },
});

class NewsComponent extends React.Component {
  render() {
    return (
      <h1>News Component!</h1>
    );
  }
}

ReactDOM.render(
  <News />,
  document.getElementById('container')
);

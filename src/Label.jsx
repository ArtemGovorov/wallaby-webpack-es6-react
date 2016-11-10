import React from 'react';

let Label = React.createClass({
  // ignore coverage
  render: function () {
    return <div>
      Wallaby.js{' ' + (this.props ? this.props.children : 'unexpected')}
    </div>;
  }
});

export default Label;
import React, { Component } from 'react';

/*
 * might be wise to rename this file since it's imported by another
 * popup.js file..
 */
class Popup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello World!
        <div id="links">
          <a href="app.html" target="_blank">Application</a>
        </div>
      </div>
    );
  }
}

export default Popup;
import React from 'react';

/*
 * might be wise to rename this file since it's imported by another
 * popup.js file..
 */
function Popup() {
  return (
    <div>
      Hello World!
      <div id="links">
        <a href="app.html" target="_blank">Application</a>
      </div>
    </div>
  );
}

export default Popup;

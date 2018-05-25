import React from 'react';
import { render } from 'react-dom';

import App from './ui/App';
import './main.css';
import { Meteor } from 'meteor/meteor';

// const hi = {
//   sup: 'hi'
// };

// const hello = {
//   ...hi
// };

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});

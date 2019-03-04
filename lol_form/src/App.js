import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import './App.css';
import Form from './Form';

class App extends Component {
  onSubmit = fields => {
    console.log('Form accepts: ', fields);
  };
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)} />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

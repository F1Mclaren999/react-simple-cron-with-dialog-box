import React, { Component } from 'react';
import { render } from 'react-dom';
import DialogBox from './Dialog';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Cron-Validator-dialog-box',
      dialogOpen: false,
      isCutOffExprInMin: true,
    };
  }

  render() {
    const { dialogOpen } = this.state;
    return (
      <div id="main">
        <h3>Hello, {this.state.name}</h3>
        <DialogBox
          confirmLabel="Submit"
          dialogOpen={dialogOpen}
          dialogTitle="Confirguration"
          maxWith="md"
          isDisabled={false}
          handleCancel={this.closeDialog}
          handleConfirm={this.confirm}
        >
          <div>Hello</div>
        </DialogBox>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

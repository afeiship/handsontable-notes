import HandsontableNotes from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <HandsontableNotes>
          <div className="is-extra"></div>
        </HandsontableNotes>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

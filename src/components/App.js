import React from 'react';
import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="page-header">
          <h1>React-Redux-Webpack Template</h1>
        </div>
        <p className="lead">A simple starting template to create simple Single Page Apps.</p>
        <p>Have fun coding... <i className="fa fa-thumbs-o-up"/></p>
      </div>
    );
  }
}

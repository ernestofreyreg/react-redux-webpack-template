import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="page-header">
            <h1>React-Redux-Webpack Template</h1>
          </div>
          <p className="lead">A simple starting template to create simple Single Page Apps.</p>
          <p>Have fun coding... <i className="fa fa-thumbs-o-up"/></p>
        </div>

        <footer className="footer">
          <div className="container">
            <p className="text-muted"><b>react-redux-webpack-template</b> by Ernesto Freyre</p>
          </div>
        </footer>
      </div>
    );
  }
}

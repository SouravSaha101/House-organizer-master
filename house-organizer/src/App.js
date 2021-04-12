import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div id="nav">
        <nav className="navbar navbar-dark  bg-dark fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand  mr-0">Home Organizer</a>
            <div className="float-right">
              <a className="btn btn-lg btn-link text-primary">Log in</a>
              <a className="btn btn-lg bg-primary text-white font-weight-bold">
                Sign up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default App;

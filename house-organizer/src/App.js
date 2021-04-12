import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header id="nav">
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
      </header>
      <section id="home">
        <div className="container pt-10 pb-5 text-center">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="intro-heading text-uppercase">
                Home Organizing Lavra Lahsun
              </div>
              <h3 className="mt-5">
                Dil kyun yeh mera shor kare Dil kyun yeh mera shor kare Idhar
                nahi Udhar nahi Teri Ore Chale.
              </h3>
              <form className="row my-5">
                <div className="d-none d-md-block col-md-7 pr-md-2">
                  <input
                    name="email"
                    className="form-control h-100"
                    type="email"
                    placeholder="Email"
                  ></input>
                </div>
                <div className="col-md-5 pl-md-2">
                  <button
                    type="submit"
                    className="btn btn-wrap btn-primary btn-block px-4"
                  >
                    Sign up—it’s free!
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-5 home-image">
              <img
                src="'./Assests/Style/computer-notebook.jpg'"
                width="931"
                height="1205"
                className="img-fluid"
                alt="Home Organizing is the 1st Step for Stress Free Life"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="copyright">
                &copy; Copyright 2021. All rights reserved
              </span>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

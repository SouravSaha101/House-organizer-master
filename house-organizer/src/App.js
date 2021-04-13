import React, { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import HomeNav from "./Components/Home-Nav/HomeNav";

const App = () => {
  return (
    <div className="App">
      <HomeNav />
      <section id="home">
        <div className="container pt-10 pb-5 text-md-left">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="intro-heading">
                Organizing have never been more fun
              </div>
              <p className="mt-5">
                Dil kyun yeh mera shor kare Dil kyun yeh mera shor kare Idhar
                nahi Udhar nahi Teri Ore Chale.
              </p>
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
                    className="btn btn-wrap btn-primary btn-block btn-lg"
                  >
                    Sign up—it’s free!
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-3 home-image">
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
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="container mt-3">
      <h1>
        <header className="header .d-sm-flex mt-3">
          Nádia
          <p>Correia Gonçalves</p>
        </header>
      </h1>
      <div>
        <form>
          <div className="float-left">
            <input className="emailInput" type="text" placeholder="Email" />
          </div>
          <div className="float-left ml-2">
            <FontAwesomeIcon icon={faInfoCircle} size="lg" />
          </div>
          <div className="avocado float-left ml-2">🥑</div>
        </form>
      </div>
      <h2>
        <div className="row float-left mt-4">
          <div className="col-sm-4">One of three columns</div>
          <div className="col-sm-4">One of three columns</div>
          <div className="col-sm-4">One of three columns</div>
        </div>
      </h2>
    </div>
  );
}

export default App;

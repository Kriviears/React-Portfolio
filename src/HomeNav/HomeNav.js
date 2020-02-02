import React, { Component } from "react";
import "./HomeNav.css";
import "../NavTab/NavTab";
import NavTab from "../NavTab/NavTab";
import { Link } from "react-router-dom";

export default class HomeNav extends Component {
  //restyle tabs to be more readable

  render() {
    return (
      <div className="Side_Nav">
        <ul className="Base_Tabs Tabs">
          <li>
            <Link to="/">
              <NavTab tabName={"Cover"} />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <NavTab tabName={"About Me"} />
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <NavTab tabName={"Projects"} />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

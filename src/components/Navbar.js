import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.aboutText}
            </Link>
          </li>
          <li className="nav-item active">
            <button
              className="btn btn-outline-light"
              onClick={props.handleMode}
            >
              {props.text}
            </button>
          </li>
        </ul>
        <div className="d-flex">
          <div
            className="bg-primary rounded mx-2"
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
            onClick={() => {
              props.handleModeBg("primary");
            }}
          ></div>
          <div
            className="bg-danger rounded mx-2"
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
            onClick={() => {
              props.handleModeBg("danger");
            }}
          ></div>
          <div
            className="bg-success rounded mx-2"
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
            onClick={() => {
              props.handleModeBg("success");
            }}
          ></div>
          <div
            className="bg-light rounded mx-2"
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
            onClick={() => {
              props.handleModeBg("light");
            }}
          ></div>
          <div
            className="bg-secondary rounded mx-2"
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
            onClick={() => {
              props.handleModeBg("dark");
            }}
          ></div>
          <div
            className="bg-warning rounded mx-2"
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
            onClick={() => {
              props.handleModeBg("warning");
            }}
          ></div>
        </div>

        <form className="form-inline my-2 my-lg-0">
          <button
            className="btn mx-1 my-2 my-sm-0"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              props.handleBodyBg("navy");
            }}
            style={{ borderRadius: "100px", backgroundColor: "navy" }}
          ></button>
          <button
            className="btn  mx-1 my-2 my-sm-0"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              props.handleBodyBg("black");
            }}
            style={{ borderRadius: "100px", backgroundColor: "black" }}
          ></button>
          <button
            className="btn mx-1 my-2 my-sm-0"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              props.handleBodyBg("pink");
            }}
            style={{ borderRadius: "100px", backgroundColor: "pink" }}
          ></button>
          <input
            className="form-control mx-1 mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary mx-1 my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

// Navbar.defaultProps = { title: "set title here", aboutText: "about text here" };

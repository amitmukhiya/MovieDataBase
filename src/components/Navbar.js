import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const text = (e) => {
    props.setSearchText(e.target.value);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ">
            MovieDB
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={props.searchText}
                onChange={text}
              />
              <Link
                to="/search"
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-4">
                <li className="nav-item">
                  <Link to="/register" className="nav-link active" aria-current="page">
                    User
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

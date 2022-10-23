import React from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "./authentication/Authentication"
import { NotificationManager } from 'react-notifications';

export default function Navbar(props) {
  const navigate = useNavigate()
  const text = (e) => {
    props.setSearchText(e.target.value);
  }
  const data = localStorage.getItem('user')
  const userSession = JSON.parse(data)
  const log = () => {
    return (<>
      <div>
        <button className="btn bg-primary" onClick={() => {
          authService.logOut(); navigate('/')
          NotificationManager.success('Logout', 'Logout Successful', 2000)
        }}>
          Logout
        </button>
      </div>
    </>)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <Link to="/" className="navbar-brand ">
              MovieDB
            </Link>
          </div>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
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
                  <Link to="/login" className="nav-link active btn bg-none" aria-current="page">
                    {userSession ? '' : "Login"}
                  </Link>
                </li>
              </ul>
            </form>
            {data ? log() : ""}
          </div>
        </div>
      </nav>
    </>
  );
}

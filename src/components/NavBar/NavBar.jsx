import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Episodes } from "./../../Pages/Episodes";

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container">
          <div className="brand navbar-brand">
            <Link to={"/"} className="ubuntu text-light fs-3 ">
              Rick & Morty <span className="text-warning">WiKi</span>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <style jsx="true">
              {`
                button[aria-expanded="false"] > .close {
                  display: none;
                }
                button[aria-expanded="true"] > .open {
                  display: none;
                }
              `}
            </style>

            <i className="fa-solid fa-bars open"></i>
            <i className="fa-solid fa-xmark close"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end space-between"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav fs-5 gap-3">
              <NavLink to={"/"} activeClassName="active" className="nav-link">
                Characters
              </NavLink>
              <NavLink to={"/episodes"} className="nav-link">
                Episodes
              </NavLink>
              <NavLink to={"/location"} className="nav-link">
                Location
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

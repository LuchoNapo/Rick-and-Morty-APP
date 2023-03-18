import React from "react";
import styles from "./Search.module.scss";

export const Search = ({ setSearch, setPage }) => {
  return (
    <div className="">
      <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center mb-5 gap-4">
        <div>
          <img className="logo" src="squanchy.png" alt="squanchy" />
        </div>

        <input
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Search Charachters"
          className={`${styles.input} bg-dark text-light fs-5 `}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className={`${styles.btn} btn btn-warning fs-6`}
        >
          Search
        </button>
      </form>
    </div>
  );
};

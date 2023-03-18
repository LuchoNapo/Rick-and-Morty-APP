import React from "react";
import { Gender } from "./Category/Gender";
import { Species } from "./Category/Species";
import { Status } from "./Category/Status";
import styles from "./Filter.module.scss";

export const Filter = ({ setStatus, setPage, setGender, setSpecie }) => {
  let clear = () => {
    setStatus("");
    setGender("");
    setPage("");
    setSpecie("");
    setStatus("");
    window.location.reload(false)
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-3 mb-2">Filter</div>
      <div
        onClick={clear}
        className="text-center text-warning text-decoration-underline mb-2"
        style={{ cursor: "pointer" }}
      >
        Clear Filters
      </div>
      <div
        className={`${styles.acordion} accordion accordion-flush`}
        id="accordionExample"
      >
        <Status setStatus={setStatus} setPage={setPage} />
        <Species setSpecie={setSpecie} setPage={setPage} />
        <Gender setGender={setGender} setPage={setPage} />
      </div>
    </div>
  );
};

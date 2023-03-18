import React from "react";
import { FilterBTN } from "../FilterBTN";
import styles from "../Filter.module.scss"

export const Status = ({ setStatus, setPage }) => {
  let status = ["Alive", "Dead", "Unknown"];

  return (
    <div className="accordion-item bg-dark">
      <h2 className="accordion-header" id="headingOne">
        <button
          className={`${styles.acordion} text-light accordion-button collapsed fs-5`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="ds accordion-body d-flex flex-wrap gap-2">
          {status.map((items, index) => (
            <FilterBTN
              task={setStatus}
              setPage={setPage}
              key={index}
              index={index}
              name="status"
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

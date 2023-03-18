import React from "react";
import { FilterBTN } from "../FilterBTN";
import styles from "../Filter.module.scss"

export const Gender = ({setGender, setPage}) => {
  const genders = ["Female", "Male", "Genderless", "Unknown"];

  return (
    <div className="accordion-item bg-dark">
      <h2 className="accordion-header" id="headingThree">
        <button
          className={`${styles.acordion} text-light accordion-button collapsed fs-5`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
      <div className="accordion-body d-flex flex-wrap gap-2">
          {genders.map((items, index) => (
            <FilterBTN setPage={setPage} task={setGender} key={index} index={index} name="gender" items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { FilterBTN } from "../FilterBTN";
import styles from "../Filter.module.scss"

export const Species = ({ setPage, setSpecie}) => {
  let species = [
    "Human",
    "Alien",
    "Animal",
    "Mythological",
    "Disease",
    "Humanoid",
    "Cronenberg",
    " Robot",
    "Poopybutthole",
    "Planet",
    "unknown",
  ];

  return (
    <div className="accordion-item bg-dark">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className={`${styles.acordion} text-light accordion-button collapsed fs-5`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {species.map((items, index) => (
            <FilterBTN setPage={setPage} task={setSpecie} key={index} index={index} name="specie" items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./Filter.module.scss"


export const FilterBTN = ({ name, index, items, task, setPage }) => {
  return (
    <div>
      <style jsx="true">
        {`
          .x:checked + label {
            background-color: #ffc107;
            color: black;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          onClick={() => {
            setPage(1);
            task(items);
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className={`${styles.boton} btn btn-outline-warning `} htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

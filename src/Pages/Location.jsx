import React, { useState, useEffect } from "react";
import { Cards } from "../components/Cards/Cards";
import { InputGroup } from "../components/Filter/Category/InputGroup";

export const Location = () => {
  const [id, setID] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const { name, type, dimension } = info;

  const api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container mt-3">
      <div className="row mb-4">
        <h1 className="text-center mb-3 ubuntu">
          Location:{" "}
          <span className="text-warning">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-3">Pick Location</h4>
          <InputGroup setID={setID} total={126} name="Location" />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

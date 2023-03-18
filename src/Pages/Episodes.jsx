import React, { useState, useEffect } from "react";
import { Cards } from "../components/Cards/Cards";
import { InputGroup } from "../components/Filter/Category/InputGroup";

export const Episodes = () => {
  const [id, setID] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const { name, air_date } = info;

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
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
          Episode:{" "}
          <span className="text-warning">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-3">Pick Episodes</h4>
          <InputGroup setID={setID} total={51} name="Episode" />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

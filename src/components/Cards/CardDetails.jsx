import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const CardDetails = () => {
  const [fetchedData, setFectchedData] = useState([]);
  let { id } = useParams();
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  const { name, status, species, gender, episode, origin, type, image } =
    fetchedData;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setFectchedData(data);
    })();
  }, [api]);
  console.log(episode?.length);

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt="" className="img-fluid mb-3" />
        {(() => {
          if (status === "Dead") {
            return <div className="badge text-bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className="badge text-bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge text-bg-secondary fs-5">{status}</div>;
          }
        })()}

        <div className="content">
          <div className="">
            <span className="fw-bold">Gender:</span> {gender}
          </div>
          <div>
            <span className="fw-bold">Species:</span> {species}
          </div>
          <div>
            <span className="fw-bold">Espisodes:</span> {episode?.length}
          </div>
          <div>
            <span className="fw-bold">Origin:</span> {origin?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

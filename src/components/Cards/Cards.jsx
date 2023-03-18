import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";

export const Cards = ({ results, page }) => {
  let display;

  if (results) {
    display = results.map((element) => {
      let { id, name, image, location, status, species } = element;
      return (
        <Link
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-white"
        >
          <div className={`${styles.card}  d-flex flex-column justify-content-center`}>
            <img
              src={image}
              className={`${styles.img} img-fluid`}
              alt="image"
            />
            <div className={`${styles.content}`}>
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-5">Specie: {species}</div>
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} badge text-bg-danger position-absolute`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} badge text-bg-success position-absolute`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} badge text-bg-secondary position-absolute`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No charactert found :/";
  }

  return <>{display}</>;
};

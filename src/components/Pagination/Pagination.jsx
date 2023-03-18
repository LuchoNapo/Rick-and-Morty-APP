import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";

export const Pagination = ({ info, page, setPage }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
      <style jsx="true">
        {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
          }
        `}
      </style>

      <ReactPaginate
        className="pagination  justify-content-center gap-4 my-4"
        previousLabel="Prev"
        nextLabel="Next"
        previousClassName={`${styles.buttons} ${styles.pag} btn next`}
        nextClassName={`${styles.buttons} ${styles.pag} btn prev `}
        pageClassName="page-item"
        activeClassName={`${styles.before}s`}
        pageLinkClassName={`${styles.pag}  page-link`}
        pageCount={info?.pages}
        pageRangeDisplayed={width < 576 ? 1 : 3}
        marginPagesDisplayed={width < 576 ? 1 : 3}
        forcePage={page === 1 ? 0 : page - 1}
        onPageChange={(data) => {
          setPage(data.selected + 1);
        }}
      />
    </>
  );
};

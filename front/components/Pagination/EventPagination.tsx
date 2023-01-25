import React from "react";
import { Pagination } from "@mui/material";
import styles from "../../styles/EventPagination.module.css";

function EventPagination({ results, rows, page, setPage, start, setStart }) {
  let pageCount = 0;
  if (results) {
    //console.log(results.nhits);
    pageCount = Math.ceil(results.nhits / rows);
  }
  //console.log(pageCount);
  return (
    <div className={styles.paginationContainer}>
      <Pagination
        color="primary"
        variant="outlined"
        shape="rounded"
        count={pageCount}
        page={page}
        onChange={(e, page) => {
          console.log(page);
          setPage(page);
          setStart(page * rows);
        }}
        className={styles.pagination}
      />
    </div>
  );
}

export default EventPagination;

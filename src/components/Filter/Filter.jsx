import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { filterComments } from "../../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  filterComments;

  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          type="text"
          id="search"
          placeholder="Search something.."
          onChange={(e) => dispatch(filterComments(e.target.value))}
        />
      </div>
    </div>
  );
};

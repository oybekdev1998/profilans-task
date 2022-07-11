import React from 'react';
import styles from './Pagination.module.scss'
const Pagination = ({ linksPerPage, totalLinks, paginate }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalLinks / linksPerPage); i++) {
    pageNumbers.push(i);
  }
    

  return (
      <nav>
        <ul className={styles.pagination}>
          {pageNumbers.map(number => (
            <li key={number} className={styles.page__item}>
              <a onClick={() => paginate(number)} href='!#' className={styles.page__link}>
                {number}
              </a>
            </li>
          ))
          }
        </ul>
      </nav>
  );
};

export default Pagination;
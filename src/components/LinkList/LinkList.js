import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import Link from '../Link/Link';
import Pagination from '../Pagination/Pagination';

import styles from './LinkList.module.scss'

const LinkList = () => {
  // Pagination state
  const [links, setLink] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [linksPerPage] = useState(10);

  const short_links = useSelector(state => state.link.value)

  
  useEffect(() => {
    setLink(short_links)
  }, [short_links]);

  // Get current link
  const indexOfLastLink = currentPage * linksPerPage;
  const indexOfFirstLink = indexOfLastLink - linksPerPage;
  const currentLink = links.slice(indexOfFirstLink, indexOfLastLink);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
      <h3 className={styles.linkTitle}>Список ссылок</h3>
       <Link link={currentLink} /> 
      </ul>
      <Pagination 
            linksPerPage={linksPerPage}
            totalLinks={links.length}
            paginate={paginate}
         />
    </div>
  )
}

export default LinkList
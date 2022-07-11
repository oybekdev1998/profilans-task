import React from 'react'

import styles from './Link.module.scss'


const Link = ({link}) => {
  
  return (
    <div>
      {
        link.map((link, index) => 
        <li  className={styles.list__item} key={index}>
          <div className={styles.list__counter}>{index + 1}</div>
          <div className={styles.list__item_firstLink}>
            <a className={styles.list__link} href="2#">{link}</a>
          </div>
          <div className={styles.list__item_lastLink}>
            <a className={styles.list__link} href="2#">
            {
              link.slice(4 )
            }
            </a>
          </div>
        </li>
        )
      }
    </div>
  )
}

export default Link
import React from 'react'
import {useSelector} from 'react-redux'
import styles from './MyLink.module.scss'

const MyLink = () => {
  
  const links = useSelector(state => state.link.value)
  const currentDate = new Date().getHours()
  
  return (
    <div className={styles.container}>
      <h3 className={styles.linkTitle}>Мои ссылки</h3>
      <ul className={styles.list}>
        {
          links.slice(0, 2).map((link, index) => 
          <li className={styles.list__item} key={index}>
            <div className={styles.list__counter}>{index + 1}</div>
            <div className={styles.list__item_firstLink}>
              <a className={styles.list__link} href="2#">{link}</a>
            </div>
            <div className={styles.list__item_lastLink}>
              <a className={styles.list__link} href="2#">
                {
                  link.slice(4)
                }
              </a>
            </div>
            <div className={styles.list__item_usedCount}>{currentDate}</div>

          </li>
          )
        }
        
      </ul>
    </div>
  )
}

export default MyLink
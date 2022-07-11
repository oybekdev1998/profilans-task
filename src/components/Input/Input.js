import React, { useState, } from 'react'
import {useDispatch} from 'react-redux'
import { short_link } from '../../store/linkSlice'
import styles from './Input.module.scss'

const Input = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  
  const clickHandler = () => {
    

    if(value && isValidURL(value)) {
      dispatch(short_link(value))
      setValue('')
    }
  }

  function isValidURL(value) {
    var res = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g);
    return (res !== null)
  };
  


  return (
    <div className={styles.inputLink}>
      <h3 className={styles.inputLink__title}>Введите ссылку</h3>
      <div className={styles.wrapper}>
        <input value={value} onChange={(e) => setValue(e.target.value)} className={styles.input} type='text'/>
        <button onClick={clickHandler}  className={styles.button}>Сократить</button>
      </div>
      <span className={styles.error}>{isValidURL(value) ? ' ' : 'URL адрес неправильно'}</span>

    </div>
  )
}

export default Input
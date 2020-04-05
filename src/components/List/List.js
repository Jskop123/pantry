import React from 'react'
import styles from './List.module.css'

const List = ({name, count}) => (
  <li className={styles.wrapper} id={name}>
    <h4>Product: </h4>
    <h1>{name}</h1>
    <h4>Quantity: </h4>
    <h1>{count}</h1>
  </li>
  
)

export default List
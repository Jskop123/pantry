import React from 'react'
import styles from './Product.module.css'


const ProductItem = ({name, count, onDelete}) => (
  <li id={name}>
    <h1>{name}</h1>
    <h1>{count}</h1>
    <button onClick={onDelete}>Delete</button>
  </li>
)

export default ProductItem
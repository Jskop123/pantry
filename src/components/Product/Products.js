import React from 'react'
import styles from './Product.module.css'

import Title from '../../components/Title/Title'
import DelButton from '../../components/DelButton/DelButton'

const Products = ({ products, onDelete }) => (
  <>
    <Title children={'List of products'} />
    <ul>
      {products.map(product => (
        <li className={styles.wrapper} id={product.name}>
          <h3>Product: </h3>
          <h1>{product.name}</h1>
          <h3>Quantity: </h3>
          <h1>{product.count}</h1>
          <DelButton onDelete={onDelete} />
        </li>
      ))}
    </ul>
  </>
)

export default Products
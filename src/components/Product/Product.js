import React from 'react'
import styles from './Product.module.css'
import ProductItem from './ProductItem'

//import ProductItem from './ProductItem'

const Product = ({products, onDelete}) => (
  <ul>
    {products.map(product => (
      <ProductItem key={product.name} onDelete={onDelete} {...product}/>
    ))}
  </ul>
)

export default Product
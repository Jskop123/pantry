import React from 'react'
import AppContext from '../../context'

import Product from '../../components/Product/Product'

const HomeView = () => (
  <ul>
    <AppContext.Consumer>
      {(context) => (
        <Product 
          products = {context.list}
          onDelete = {context.deleteListItem}
        />
          
        //console.log(context.list[0])
      )}
    </AppContext.Consumer>
  </ul>
)

export default HomeView


/* 
  Stan może mieć wartość numeryczną lub graficzną w postaci np. paska – użyj wyobraźni
  Każdy element można łatwo usunąć z listy (wymagane potwierdzenie przed usunięciem).
*/
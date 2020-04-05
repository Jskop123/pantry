import React from 'react'
import AppContext from '../../context'

import Products from '../../components/Product/Products'

const HomeView = () => (
  <ul>
    <AppContext.Consumer>
      {(context) => (
        <Products products={context.list} onDelete={context.deleteListItem} />
      )}
    </AppContext.Consumer>
  </ul>
)

export default HomeView


/* 
  Stan może mieć wartość numeryczną lub graficzną w postaci np. paska – użyj wyobraźni
  Każdy element można łatwo usunąć z listy (wymagane potwierdzenie przed usunięciem).
*/
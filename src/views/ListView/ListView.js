import React from 'react'
import AppContext from '../../context'

import List from '../../components/List/List'
import Title from '../../components/Title/Title'

const ListView = () => (
  <>
    <AppContext.Consumer>
      {(context) => (
        <>
        <Title children={`Shopping list with products less than ${context.limit} pieces.`}/>
        <ul>
        {context.list.map(product => (
          (product.count <= context.limit) ? <List key={product.name} {...product}/> : null
        ))}
      </ul>
      </>
      )}
    </AppContext.Consumer>
  </>

)
export default ListView

/*
  -Lista zakupów generuje się automatycznie jeśli poziom jakiegoś produktu przekroczy określone minimum 
  –wtedy produkt sam wskakuje nam do listy, aby kupić go w sklepie
*/
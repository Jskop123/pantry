import React from 'react'
import AppContext from '../../context'

import Edit from '../../components/Edit/Edit'
import Title from '../../components/Title/Title'

const EditView = () => (
  <>
  <Title children={'Edit product'} />
  <ul>
  <AppContext.Consumer>
      {(context) => (
        <ul>
        {context.list.map(product => (
          <Edit key={product.name} onDelete={context.deleteListItem} onNameEdit={context.editNameHandler} onCountEdit={context.editCountHandler} {...product}/>
        ))}
        </ul>
      )}
    </AppContext.Consumer>
  </ul>
  </>
)

export default EditView

/*
  Zmiana nazwy & zmiana kategorii (opcjonalne: jeżeli stworzysz kategorie)
- Każdy element można łatwo usunąć z listy (wymagane potwierdzenie przed usunięciem).
- Zmiana ilości produktu przechowywanej w domu (możesz pomyśleć nad jednostkami miary 
  skorelowanymi z kategoriami np. jeśli kateg orią są napoje, to wiadomo że jednostką będą litry, 
  lub jeśli wolisz coś bardziej namacalnego – puszki/butelki).
*/
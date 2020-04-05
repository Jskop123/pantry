import React from 'react'
import Settings from '../../components/Settings/Settings'
import AppContext from '../../context'

import Title from '../../components/Title/Title'

const SettingsView = () => (
  <AppContext.Consumer>
    {(context) => (
      <>
      <Title children={'Settings'} />
      <Settings text={'Update alert every'} unit={'days.'} change={context.alertDaysFn} number={context.update} />
      <Settings text={'Set minimal pieces of products'} change={context.limitFn} number={context.limit} />
      </>
    )}
  </AppContext.Consumer>
)

export default SettingsView

/*
  Ustawienie opcji przypominania o aktualizacji listy (raz na tydzień, raz na 2 dni etc.)  – może to być push
  notyfikacja w przeglądarce, lub wysłanie do Ciebie SMS– wybór należy do Ciebie. -W tym widoku możesz uruchomić wyobraźnię i dodać rzeczy,
  z którymi chcesz poeksperymentować np. ustawienie light/dark theme globalnie dla całej apki
*/
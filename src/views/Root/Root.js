import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppContext from '../../context'

import AddView from '../AddView/AddView'
import EditView from '../EditView/EditView'
import HomeView from '../HomeView/HomeView'
import ListView from '../ListView/ListView'
import SettingsView from '../SettingsView/SettingsView'


class Root extends React.Component {

  state = {
    list: [
      {
        name: 'mąka',
        count: 5,   
      },
      {
        name: 'chleb',
        count: 3,   
      },
      {
        name: 'woda',
        count: 10,   
      },
    ]
  }

  deleteListItem = (event) => {
    const toDelete = this.state.list.find(({name}) => name === event.target.parentNode.id)
    const idToDelete = this.state.list.indexOf(toDelete)
    const rmFromList = [...this.state.list.splice(idToDelete, 1)]
    this.setState({list: this.state.list})
  }

  render() {

    const contextElements = {
      ...this.state,
      deleteListItem: this.deleteListItem
    }

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Switch>
            <Route exact path="/" component={HomeView} ></Route>
            <Route exact path="/add" component={AddView} ></Route>
            <Route exact path="/edit" component={EditView} ></Route>
            <Route exact path="/list" component={ListView} ></Route>
            <Route exact path="/settings" component={SettingsView} ></Route>
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

export default Root;

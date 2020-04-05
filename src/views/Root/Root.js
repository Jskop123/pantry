import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppContext from '../../context'
import './index.css'

import Header from '../../components/Header/Header'
import AddView from '../AddView/AddView'
import EditView from '../EditView/EditView'
import HomeView from '../HomeView/HomeView'
import ListView from '../ListView/ListView'
import SettingsView from '../SettingsView/SettingsView'

class Root extends React.Component {

  state = {
    list: [],
    update: 1,
    limit: 5,
  }

  UNSAFE_componentWillMount() {
    localStorage.getItem('list') && this.setState({
      list: JSON.parse(localStorage.getItem('list'))
    })
    localStorage.getItem('update') && this.setState({
      update: (localStorage.getItem('update'))
    })
    localStorage.getItem('limit') && this.setState({
      limit: (localStorage.getItem('limit'))
    })
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('list', JSON.stringify(nextState.list))
    localStorage.setItem('update', nextState.update)
    localStorage.setItem('limit', nextState.limit)
  }

  deleteListItem = event => {
    if (window.confirm('Czy napewno chcesz usunąć wybrany produkt')) {
      const list = [...this.state.list]
      const idToDelete = list.findIndex(({ name }) => name === event.target.parentNode.id)
      const rm = [...list.splice(idToDelete, 1)]
      this.setState({ list: list })
    }
  }

  editNameHandler = event => {
    const id = this.state.list.findIndex(({ name }) => name === event.target.parentNode.id)
    const listCopy = [...this.state.list]
    listCopy[id].name = event.target.value
    this.setState({
      list: listCopy
    })
  }

  editCountHandler = event => {
    const id = this.state.list.findIndex(({ name }) => name === event.target.parentNode.id)
    const listCopy = [...this.state.list]
    listCopy[id].count = event.target.value
    this.setState({
      list: listCopy
    })
  }

  addProduct = (e, newProduct) => {
    e.preventDefault()
    const list = [...this.state.list]
    list.push(newProduct)
    this.setState(prevState => ({
      list: list
    }))
    localStorage.setItem('listState', JSON.stringify(newProduct))
    e.target.reset()
  }

  alertDaysFn = event => {
    this.setState({
      update: event.target.value
    })
  }

  limitFn = event => {
    this.setState({
      limit: event.target.value
    })
  }

  render() {

    const contextElements = {
      ...this.state,
      deleteListItem: this.deleteListItem,
      editNameHandler: this.editNameHandler,
      editCountHandler: this.editCountHandler,
      addProduct: this.addProduct,
      alertDaysFn: this.alertDaysFn,
      limitFn: this.limitFn,
    }

    return (
      <BrowserRouter>
        <Header />
        <AppContext.Provider value={contextElements}>
          <Switch>
            <Route exact path="/" component={HomeView} ></Route>
            <Route path="/add" component={AddView} ></Route>
            <Route path="/edit" component={EditView} ></Route>
            <Route path="/list" component={ListView} ></Route>
            <Route path="/settings" component={SettingsView} ></Route>
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

export default Root;

import React from 'react'
import AppContext from '../../context'
import styles from './Add.module.css'

class Add extends React.Component {
  state = {
    name: '',
    count: '',
  }

  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {

    return (
      <AppContext.Consumer>
        {(context => (
          <form className={styles.wrapper} onSubmit={e => context.addProduct(e, this.state)}>
            <label>Product: </label>
            <input onChange={this.inputChange} name="name" type="text" />
            <label>Count: </label>
            <input onChange={this.inputChange} name="count" type="text" />
            <input type="submit" value="Add new product" />
          </form>
        ))}
      </AppContext.Consumer>
    )
  }
}


export default Add
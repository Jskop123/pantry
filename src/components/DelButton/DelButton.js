import React from 'react'
import styles from './DelButton.module.css'

const DelButton = ({onDelete}) => (
  <button onClick={onDelete} className={styles.button}>Delete</button>
)

export default DelButton
import React from 'react'
import styles from './Edit.module.css'

import DelButton from '../DelButton/DelButton'


const Edit = ({name, count, onDelete, onNameEdit, onCountEdit}) => (
  <li className={styles.wrapper} id={name}>
    <input onChange={onNameEdit} type="text" value={name} />
    <input onChange={onCountEdit} type="number" value={count} />
    <DelButton onDelete={onDelete} />
  </li>
)

export default Edit
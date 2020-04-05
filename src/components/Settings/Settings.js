import React from 'react'
import styles from './Settings.module.css'



const Settings = ({text, change, number, unit}) => (
  <div className={styles.alert}>
    <h3>{text}</h3>
    <input onChange={change} type="number" min="0" max="100" value={number} />
    <h3>{unit}</h3>
  </div>
)

export default Settings

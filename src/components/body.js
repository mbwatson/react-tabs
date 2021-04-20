import React from 'react'
import propTypes from 'prop-types'
import styles from './tabs.module.css'

export const Body = ({ active, children, ...props }) => {
  return (
    <div
      role="tabpanel"
      className={ styles.body }
      { ...props }
    >
      { children }
    </div>
  )
}

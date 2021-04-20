import React from 'react'
import propTypes from 'prop-types'
import styles from './tabs.module.css'

export const Header = ({ title, active, ...props }) => {
  return (
    <div
      className={ `${ styles.tab } ${ active ? styles.active : styles.inactive }` }
      role="tab"
      { ...props }
    >
      { title }
    </div>
  )
}

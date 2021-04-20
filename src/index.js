import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import propTypes from 'prop-types'
import styles from './styles.module.css'
import { Body, Header } from './components'

const TabsContext = createContext({})

export const Tabs = ({ children }) => {
  const bodyContainer = useRef()
  const [tabIndex, setTabIndex] = useState(0)
  const tabs = React.Children.toArray(children).map((child, index) => {
    return ({
      id: child.props.id,
      title: child.props.title,
      body: child.props.children,
    })
  })

  useEffect(() => {
    if (!bodyContainer.current) return
    const pixelheight = bodyContainer.current.querySelector('div').getBoundingClientRect().height
    bodyContainer.current.style.minHeight = `${ pixelheight }px`
    bodyContainer.current.style.maxHeight = `${ pixelheight }px`
  }, [bodyContainer, tabIndex])

  return (
    <TabsContext.Provider value={{ tabIndex, setTabIndex }}>
      <div className={ styles.tray } role="tablist">
        {
          tabs.map(({ id, title }, index) => (
            <Header
              key={ `tab__title__${ index }` }
              id={ `tab__title__${ index }` }
              title={ title }
              aria-controls={ `tab__body__${ index }` }
              onClick={ () => setTabIndex(index) }
              active={ index === tabIndex }
            />
          ))
        }
      </div>
      <div className={ styles.bodyContainer } ref={ bodyContainer }>
        {
          tabs.map(({ id, body }, index) => index === tabIndex && (
            <Body
              key={ `tab__body__${ index }` }
              id={ `tab__body__${ index}` }
              aria-labelledby={ `tab__title__${ index }` }
            >
              { body }
            </Body>
          ))
        }
      </div>
    </TabsContext.Provider>
  )
}

export const Tab = ({ title, children }) => {
  return (
    title
  )
}

export const useTabs = () => useContext(TabsContext)

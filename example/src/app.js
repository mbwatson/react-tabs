import React from 'react'

import { Tabs, Tab } from 'react-tabs'
import 'react-tabs/dist/index.css'

export const App = () => {
  return (
    <div style={{ width: '90%', maxWidth: '800px', border: '1px solid #ccc', margin: '2rem auto', padding: '5rem' }}>
      <Tabs>
        <Tab title="one">
          <p>one one one one one one one one one </p>
          <p>one one one one one one one one one </p>
          <p>one one one one one one one one one </p>
          <p>one one one one one one one one one </p>
          <p>one one one one one one one one one </p>
        </Tab>
        <Tab title="two">
          <p>two two two two two two two two two two two two two two two two two </p>
          <p>
            two two two two two two two two two two two two two two two two two 
            two two two two two two two two two two two two two two two two two
          </p>
          <button>two two</button>
          <p>
            two two two two two two two two two two two two two two two two two 
            two two two two two two two two two two two two two two two two two 
            two two two two two two two two two two two two two two two two two 
            two two two two two two two two two two two two two two two two two
            two two two two two two two two two two two two two two two two two
          </p>
        </Tab>
        <Tab title="three">
          <p>three three three three three three three three three </p>
          <ul>
            <li>three three</li>
            <li>three three</li>
            <li>three three</li>
          </ul>
          <p>three three three three three three three three three </p>
        </Tab>
      </Tabs>
    </div>
  )
}

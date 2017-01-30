import React, { Component } from 'react'
import styles from '../styles/screen.scss'
// import styles from './portfolio.scss'
// import Images from './Images.js'
import data from './data.js'

class Portfolio extends Component {

  render () {
    return <ul className={styles.portfolio}>
      {data.examples.map((example, i) => {
        return <li key={i}>
          <img src={example.image} />
          <div className={styles.imageText}>
            <h4><a href={example.website}>{example.title}</a></h4>
            <p>{example.description}</p>
          </div>
        </li>
      })}

    </ul>
  }
}

export default Portfolio

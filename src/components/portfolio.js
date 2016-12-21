import React, { Component } from 'react'
import styles from './portfolio.scss'

class Portfolio extends Component {

  render () {
    return <section className={styles.root}>

      <ul className={styles.portfolio}>
        <li className={styles.colorPicker}>
          <p className={styles.blurb}> A Javascript color picker </p>
        </li>
        <li className={styles.tictactoe} />
        <li className={styles.onelist} />
        <li className={styles.memory} />
      </ul>
    </section>
  }
}

export default Portfolio

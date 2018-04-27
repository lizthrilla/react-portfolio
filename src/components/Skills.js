import React, { Component } from 'react'
import styles from '../styles/skills.scss'

class Skills extends Component {

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.col}>
          <h3>Skills Set</h3>
          <ul className={styles.skill}>
            <li><span className={styles.expand} id={styles.HTML} /><em>HTML/CSS</em></li>
            <li><span className={styles.expand} id={styles.JS} /><em>Javascript</em></li>
            <li><span className={styles.expand} id={styles.React} /><em>React</em></li>
            <li><span className={styles.expand} id={styles.RN} /><em>React Native</em></li>
            <li><span className={styles.expand} id={styles.Rails} /><em>Rails</em></li>
            <li><span className={styles.expand} id={styles.skate} /><em>Roller Skating</em></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Skills

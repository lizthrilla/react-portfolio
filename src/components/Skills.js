import React, { Component } from 'react'
import styles from '../styles/skills.scss'

class Skills extends Component {

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.col}>
          <h3>Skills Set</h3>
          <ul className={styles.skill}>
            <li><span className={styles.expand} id={styles.HTML} /><em>HTML 5</em></li>
            <li><span className={styles.expand} id={styles.CSS} /><em>CSS 3</em></li>
            <li><span className={styles.expand} id={styles.JS} /><em>Javascript</em></li>
            <li><span className={styles.expand} id={styles.React} /><em>React</em></li>
            <li><span className={styles.expand} id={styles.wp} /><em>WordPress</em></li>
            <li><span className={styles.expand} id={styles.skate} /><em>Roller Skating</em></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Skills

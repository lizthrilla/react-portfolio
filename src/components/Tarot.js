import React, { Component } from 'react'
import styles from '../styles/tarot.scss'

class Tarot extends Component {

  render () {
    return <section className={styles.finalProject}>
      <div className={styles.project}>
        <a href='http://tarot.lizthrilla.surge.sh'>
          <img className={styles.tarot} src={require('./Tarot.png')} />
        </a>
        <div className={styles.imageText}>
          <h3>Final Project</h3>
          <h4>The Iron Yard - Front End Engineering</h4>
          <p>A tarot card app made using react and Javascript.</p>
        </div>
      </div>
    </section>
  }
}

export default Tarot

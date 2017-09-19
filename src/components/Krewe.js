import React, { Component } from 'react'
import styles from '../styles/tarot.scss'

class Krewe extends Component {

  render () {
    return <section className={styles.finalProject}>
      <div className={styles.project}>
        <a href='http://womenskrewe.lizthrilla.surge.sh'>
          <img className={styles.tarot} src={require('./kreweHome.png')} />
        </a>
        <div className={styles.imageText}>
          <h3>Tampa Bay Krewe Women's Rugby</h3>
          <p>A website for the Tampa Bay area rugby team.</p>
        </div>
      </div>
    </section>
  }
}

export default Krewe

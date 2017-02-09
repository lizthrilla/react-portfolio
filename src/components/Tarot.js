import React, { Component } from 'react'
import styles from './blogs.scss'

class Tarot extends Component {

  render () {
    return <section>
      <div className={styles.tarot}
        <img src={require('./Tarot.png')} />
      </div>
      <p>A tarot card app made using react and Javascript.</p>
    </section>
  }
}

export default Tarot

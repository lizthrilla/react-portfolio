import React, { Component } from 'react'
import styles from './socialmedia.scss'

class SocialMedia extends Component {

  render () {
    return <div className={styles}>
      <h4> Stay Connected with Me! </h4>
      <ul>
        <li className={styles.github} />
        <li className={styles.twitter} />
        <li className={styles.medium} />
        <li className={styles.linkedin} />
      </ul>
    </div>
  }
}

export default SocialMedia

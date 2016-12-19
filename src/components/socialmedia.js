import React, { Component } from 'react'
import styles from './socialmedia.scss'

class SocialMedia extends Component {

  render () {
    return <div className={styles}>
      <h4> Stay Connected with Me! </h4>
      <ul>
        <li className={styles.social}>github</li>
        <li className={styles.social}>Twitter</li>
        <li className={styles.social}>medium</li>
        <li className={styles.social}>twitter</li>
      </ul>
    </div>
  }
}

export default SocialMedia

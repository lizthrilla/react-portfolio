import React, { Component } from 'react'
import styles from './portfolio.scss'

class Portfolio extends Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  //   avatar_url: React.PropTypes.string,
  //   bio: React.PropTypes.string
  //
  // }

  render () {
    return <section className={styles.root}>
      <ul>
        <li className={styles.memory}><a href='http://memory.lizthrilla.surge.sh/'> Memory </a> /></li>
        <li className={styles.tictac} />
        <li className={styles.onelist} />
      </ul>
    </section>
  }
}

export default Portfolio

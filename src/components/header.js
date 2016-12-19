import React, { Component } from 'react'
import styles from './header.scss'
// import styles from '../styles/screen.scss'

class Header extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    avatar_url: React.PropTypes.string,
    bio: React.PropTypes.string

  }
  render () {
    return <div className={styles.root}>
      <header>
        {/* <div className={styles.hello} /> */}
        <img className={styles.avi} src={this.props.avatar_url} />
        <div className={styles.text}>
          <h1>{this.props.name}</h1>
          <p>{this.props.bio}</p>
        </div>
      </header>
    </div>
  }
}

export default Header

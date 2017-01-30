import React, { Component } from 'react'
import styles from '../styles/screen.scss'
// import styles from './header.scss'

class Header extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    avatar_url: React.PropTypes.string,
    bio: React.PropTypes.string

  }
  render () {
    return <header>
      {/* <div className={styles.deer} /> */}
      <img className={styles.avi} src={this.props.avatar_url} />
      <div className={styles.text}>
        <h1>{this.props.name}</h1>
        <p>{this.props.bio}</p>
      </div>
    </header>
  }
}

export default Header

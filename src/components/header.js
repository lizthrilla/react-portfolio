import React, { Component } from 'react'
import styles from '../styles/screen.scss'

class Header extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    avatar_url: React.PropTypes.string,
    bio: React.PropTypes.string

  }
  render () {
    return <header>
      {/* <div className={styles.deer} /> */}
      <h1>{this.props.name}</h1>
      <img className={styles.avi} src={this.props.avatar_url} />
      <div className={styles.text}>
        <p>{this.props.bio}</p>
      </div>
    </header>
  }
}

export default Header

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
        <img className={styles.avi} src={this.props.avatar_url} />
        <div className={styles.bubble}>
          <div className={styles.text}>
            <h2>Hi, I'm {this.props.name}</h2>
            <p>{this.props.bio}</p>
          </div>
          <img className={styles.speech} src='https://raw.githubusercontent.com/lizthrilla/portfolio/master/public/tri.png' />
        </div>
      </header>
    </div>
  }
}

export default Header

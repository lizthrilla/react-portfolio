import React, { Component } from 'react'
import styles from '../styles/screen.scss'

class Header extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    avatar_url: React.PropTypes.string

  }
  render () {
    return <div className={styles.root}>
      <header>
        <img className='avi' src={this.props.avatar_url} />
        <div className='intro'>
          <h2>Hi, I'm {this.props.name}</h2>
          <p>I'm a Front End Engineering student at The Iron Yard Tampa</p>
        </div>
        <img className='speech' src='../tri.png' />
      </header>
    </div>
  }
}

export default Header

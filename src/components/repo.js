import React, { Component } from 'react'
import styles from './repo.scss'

class Repo extends Component {
  static propTypes = {
    mouseOver: React.PropTypes.func,
    isHover: React.PropTypes.bool,
    find: React.PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      description: ''
    }
  }

  render () {
    return <li className={styles.li}
      onMouseOver={() => this.mouseOver('memory')} onMouseOut={() => this.mouseOut()}>
      <a href='http://memory.lizthrilla.surge.sh/'>
        <span className={styles.hover}>{this.state.description}</span>
      </a>
    </li>
  }
}
export default Repo

import React, { Component } from 'react'
import styles from '../styles/screen.scss'

class Blogs extends Component {

  static propTypes = {
    blogTitle: React.PropTypes.string
  }

  render () {
    return <div className={styles.blogOne}>
      <div />
      {/* <div className='blog2' /> */}
    </div>
  }
}

export default Blogs

import React, { Component } from 'react'
// import styles from '../styles/screen.scss'
import styles from './blogs.scss'

class Blogs extends Component {

  static propTypes = {
    blogTitle: React.PropTypes.string
  }

  render () {
    return <section className={styles.blogs}>
      <div className={styles.blogHead} />
      <div className={styles.blogText}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam... </p>
      </div>
    </section>
  }
}

export default Blogs

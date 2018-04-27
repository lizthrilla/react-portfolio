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
        <p>Prior to becoming a programmer, I was a film academic.  I hold a MPhil from the University of Girling and a Masters with Distinction from the University of Glasgow.  Programming is like directing--but without having to deal with actors.</p>
        <h1>
          <a href='https://docs.google.com/document/d/1XUKGuZqLXGRGnADlkY9tszcAM4-IXxrKvbpJt9sbzIg/edit?usp=sharing' className={styles.btn} data-wipe='Wipe Hover Effect'>Resume</a>
        </h1>
      </div>
    </section>
  }
}

export default Blogs

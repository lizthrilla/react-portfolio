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
        <p>I am a graduate of The Iron Yard's Front-End Engineering program.  Prior to becoming a programmer, I was a postgraduate student at the University of Stirling in Scotland and I hold a Masters in European Cinema from the University of Glasgow. My Bachelors is in Media Studies and Theatre with an emphasis in Video Production.  Programming reminds me of editing videos and provides and outlet for my creativity.</p>
        <h1>
          <a href='https://docs.google.com/document/d/1XUKGuZqLXGRGnADlkY9tszcAM4-IXxrKvbpJt9sbzIg/edit?usp=sharing' className={styles.btn} data-wipe='Wipe Hover Effect'>Resume</a>
        </h1>
      </div>
    </section>
  }
}

export default Blogs

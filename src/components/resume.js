import React, { Component } from 'react'
// import styles from '../styles/skills.scss'
// import Education from './Education'
import Skills from './Skills'
import Tarot from './Tarot'
import styles from '../styles/resume.scss'
// import Krewe from './Krewe'

class Resume extends Component {

  render () {
    return <section className={styles.resume}>
      {/* <Education /> */}
      <Tarot />
      <Skills />
      {/* <Krewe /> */}
    </section>
  }
}

export default Resume

import React, { Component } from 'react'
import styles from '../styles/education.scss'

class Education extends Component {

  render () {
    return <section className={styles.education}>
      <table>
        <caption>Education</caption>
        <tbody>
          <tr>
            <td>The Iron Yard</td>
            <td>Front-End Engineering</td>
          </tr>
          <tr>
            <td>University of Glasgow</td>
            <td>MLitt - European Cinema</td>
          </tr>
          <tr>
            <td>Pitzer College</td>
            <td>BA Media Studies</td>
          </tr>
        </tbody>
      </table>
    </section>
  }
}
export default Education

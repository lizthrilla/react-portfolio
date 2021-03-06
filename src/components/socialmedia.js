import React, { Component } from 'react'
// import styles from './socialmedia.scss'
import styles from '../styles/screen.scss'

class IconLink extends React.Component {
  static propTypes= {
    set: React.PropTypes.string,
    icon: React.PropTypes.string,
    url: React.PropTypes.string
  }

  render () {
    const prefix = this.props.set === 'dev' ? 'devicons devicons' : 'fa fa'
    return <a
      className={`${prefix}-${this.props.icon}`}
      href={this.props.url}
     />
  }
}
class SocialMedia extends Component {

  render () {
    return <div>
      {/* <h3> Stay Connected with Me! </h3> */}
      <ul className={styles.social}>
        <li><IconLink icon='github_alt' set='dev' url={'http://github.com/lizthrilla'} /> </li>
        <li><IconLink icon='twitter' url={'http://twitter.com/liztiller'} /> </li>
        <li><IconLink icon='linkedin' url={'https://www.linkedin.com/in/elizabeth-tiller-3965298/'} /></li>
        <li><IconLink icon='envelope' url={'mailto:elizabeth.tiller@gmail.com'} /></li>
        {/* <li><IconLink icon='medium' url={'https://medium.com/@liztiller'} /></li> */}
      </ul>
    </div>
  }
}

export default SocialMedia

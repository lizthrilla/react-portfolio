import React, { Component } from 'react'
// import data from './data.js'
// import styles from '../styles/screen.scss'

class Images extends Component {
  static propTypes = {
    // example: React.PropTypes.array,
    image: React.PropTypes.string
  }

  render () {
    return <li>
      <img src={this.props.image} />
      {/* <h4><a href={example.website}>{example.title}</a></h4>
      <p>{example.description}</p> */}

    </li>
  }
}

export default Images

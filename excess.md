class Portfolio extends Component {
  static propTypes = {
    // mouseOver: React.PropTypes.func,
    // isHover: React.PropTypes.bool,
    // find: React.PropTypes.func,
    // repos: React.PropTypes.array,
    // repoName: React.PropTypes.string
    images: React.PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      description: '',
      repoName: '',
      images: images
    }
  }

  // mouseOver = (repoName) => {
  //   const foundRepo = this.props.repos.find((repo) => repo.name === repoName)
  //
  //   if (foundRepo) {
  //     this.setState({description: foundRepo.description})
  //   } else {
  //     this.setState({description: ''})
  //   }
  // }
  //
  // mouseOut = () => {
  //   this.setState({description: ''})
  // }

  render () {
    console.log(this.state.images)
    return <section className={styles.root}>
      {/* <h3> {this.state.description}</h3> */}

      <ul>
        <Repo className={styles.memory} image={this.state.images[0]} />
        <Repo />
        <Repo />
        <Repo />

        {/* <li className={styles.memory}onMouseOver={() => this.mouseOver('memory')} onMouseOut={() => this.mouseOut()}>
          <p className={styles.description}>whatever</p>
        </li> */}
      </ul>
    </section>
  }
}

export default Portfolio

import React, { Component } from 'react'
import styles from './repo.scss'

class Repo extends Component {
  static propTypes = {
    // image: React.PropTypes.string
  }

  render () {
    return <li className={styles.oneRepo}>
      {/* <img src={this.props.image} className={styles.li} /> */}
      <p> whatever </p>
    </li>
  }
}
export default Repo

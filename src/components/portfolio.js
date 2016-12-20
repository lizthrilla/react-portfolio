import React, { Component } from 'react'
import styles from './portfolio.scss'
// import Repo from './repo'

class Portfolio extends Component {
  static propTypes = {
    mouseOver: React.PropTypes.func,
    isHover: React.PropTypes.bool,
    find: React.PropTypes.func,
    repos: React.PropTypes.array
  }

  constructor (props) {
    super(props)
    this.state = {
      description: ''
    }
  }

  mouseOver = (repoName) => {
    const foundRepo = this.props.repos.find((repo) => repo.name === repoName)

    if (foundRepo) {
      this.setState({description: foundRepo.description})
    } else {
      this.setState({description: ''})
    }
  }

  mouseOut = () => {
    this.setState({description: ''})
  }

  render () {
    // const isHover = this.props.isHover ? styles.hover : styles.noHover
    return <section className={styles.root}>
      <h3> {this.state.description}</h3>

      <ul>
        <li className={styles.memory}onMouseOver={() => this.mouseOver('memory')} onMouseOut={() => this.mouseOut()}>
          {/* <a href='http://memory.lizthrilla.surge.sh/'>
            <span className={styles.memory}> {this.state.description} </span>
          </a> */}
          <p> whatever
          </p>
        </li>

        <li className={styles.tictac}
          onMouseOver={() => this.mouseOver('tic-tac-toe')}
          onMouseOut={() => this.mouseOut()}>
          <a href='http://tic-tac-toe.lizthrilla.surge.sh/'>
            {/* <span> {this.state.description} </span> */}
          </a>
        </li>

        <li className={styles.onelist}
          onMouseOver={() => this.mouseOver('list-react')}
          onMouseOut={() => this.mouseOut()}>
          <a href='http://list-react.lizthrilla.surge.sh'>
            {/* blerg */}
          </a>
        </li>
      </ul>
    </section>
  }
}

export default Portfolio

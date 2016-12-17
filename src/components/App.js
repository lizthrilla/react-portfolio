import React, { Component } from 'react'
import Header from './header'
// import Portfolio from './portfolio.js'
// import Blogs from './blogs.js'
// import SocialMedia from './socialmedia.js'
import styles from '../styles/screen.scss'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      avatar: '',
      bio: ''
    }
  }

  componentDidMount () {
    const URL = 'https://api.github.com/users/lizthrilla'
    window.fetch(URL).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        name: data.name,
        avatar_url: data.avatar_url,
        bio: data.bio
      })
    })
  }

  render () {
    return <div className={styles.root}>
      <div className={styles.topHalf}>
        <Header name={this.state.name} avatar_url={this.state.avatar_url} bio={this.state.bio} />
      </div>
      {/* <Portfolio />
      <Blogs />
      <SocialMedia /> */}
      <footer>
        <h6> &copy; 2016 Liz Tiller.  Built at the Iron Yard - Tampa </h6>
      </footer>
    </div>
  }
}

export default App

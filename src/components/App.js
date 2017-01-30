import React, { Component } from 'react'
import Header from './header'
import Portfolio from './portfolio'
// import Blogs from './blogs'
import SocialMedia from './socialmedia'
import styles from '../styles/screen.scss'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      avatar: '',
      bio: '',
      email: ''
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
        bio: data.bio,
        email: data.email
      })
    })
    const MediumURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40liztiller'
    window.fetch(MediumURL).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        blogTitle: data.title
      })
    })

    const RepoURL = 'https://api.github.com/users/lizthrilla/repos'
    window.fetch(RepoURL).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        repos: data
        // this.state.repos.find then javascript find for name "memory"
      })
    })
  }

  render () {
    return <div className={styles.main}>
      <Header name={this.state.name} avatar_url={this.state.avatar_url} bio={this.state.bio}
        email={this.state.email} />
      <Portfolio repos={this.state.repos} />
      {/* <Blogs /> */}
      <SocialMedia />
      <div className={styles.antlers} />
      <footer>
        <h6> &copy; 2017 Liz Tiller</h6>
      </footer>
    </div>
  }
}

export default App

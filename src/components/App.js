import React, { Component } from 'react'
import Header from './header'
import Portfolio from './portfolio.js'
// import Blogs from './blogs.js'
import SocialMedia from './socialmedia.js'
import styles from '../styles/screen.scss'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      avatar: '',
      bio: '',
      email: '',
      url: '',
      Linking: '',
      blogTitle: ''
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
  }
  // handleClick= () => {
  //   Linking.openURL(this.props.url)
  // }

  render () {
    return <div className={styles.root}>
      <div className={styles.topHalf}>
        <Header name={this.state.name} avatar_url={this.state.avatar_url} bio={this.state.bio}
          email={this.state.email} />
      </div>
      <Portfolio />
      <section className={styles.blogs}>
        <div className={styles.blogHead} />
        <div className={styles.blogText} />
      </section>
      <SocialMedia />
      <footer>
        <h6> &copy; 2016 Liz Tiller.  Built at The Iron Yard - Tampa </h6>
      </footer>
    </div>
  }
}

export default App

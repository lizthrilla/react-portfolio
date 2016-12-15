import React, { Component } from 'react'

class App extends Component {

  render () {
    return <div>
      <header>
        <img className='avi' />
        <h2> Hi, I'm Liz Tiller </h2>
        <p>I'm a Front End Engineering student at The Iron Yard Tampa</p>
        <img className='speech' src='https://raw.githubusercontent.com/lizthrilla/portfolio/master/public/tri.png' alt='speechbubble' />
      </header>
      <section className='portfolio'>
        <ul>
          <li>Hello World</li>
          <li className='octodex'>Octodex</li>
          <li className='DesignCo'>Design Co</li>
        </ul>
      </section>

      <section className='blog1' />
      <section className='blog2' />
      <footer>
        <h1> Stay Connected with Me! </h1>
        <ul>
          <li className='linkedin' style='background-image: url(https://raw.githubusercontent.com/lizthrilla/tiller-portfolio/master/public/linkedin-logo-0.png)'> <a className='twitter' href='https://www.linkedin.com/in/elizabeth-tiller-3965298?trk=nav_responsive_tab_profile'>linkedin</a></li>
          <li className='socialmedia' style='background-image: url(https://raw.githubusercontent.com/lizthrilla/tiller-portfolio/master/public/Twitter_Logo_White_On_Blue.png)'> <a className='twitter' href='http://www.twitter.com/LizTiller'>Twitter</a></li>

          <li className='linkedin' style='background-image: url(https://raw.githubusercontent.com/lizthrilla/tiller-portfolio/master/public/mediumlogo.png)'> <a className='twitter' href='https://medium.com/@liztiller'>medium</a></li>
        </ul>
        <h6> &copy 2016 Liz Tiller.  Built at The Iron Yard - Tampa</h6>
      </footer>
    </div>
  }
}

export default App

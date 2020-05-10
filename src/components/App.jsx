import React from 'react';
import Typewriter from 'typewriter-effect';

const App = () => {
    return (
      <div>
        <nav className="navbar">
          <img className="logo" src="https://ziplyne.s3-us-west-1.amazonaws.com/With+Drop+Shadow.png" alt="logo" />
          <a className="nav-link" href="#">Product</a>
          <a className="nav-link" href="#">Solution</a>
          <a className="nav-link" href="#">Pricing</a>
          <a className="nav-link" href="#">Customer Stories</a>
          <a className="nav-link" href="#">Resources</a>

          <button className="textBox">Request A Demo </button>

          <svg class="box-arrow" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8.146 11.354a.5.5 0 010-.708L10.793 8 8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0z" clip-rule="evenodd"/>
            <path fill-rule="evenodd" d="M1 8a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 011 8z" clip-rule="evenodd"/>
            <path fill-rule="evenodd" d="M13.5 14.5A1.5 1.5 0 0015 13V3a1.5 1.5 0 00-1.5-1.5h-8A1.5 1.5 0 004 3v1.5a.5.5 0 001 0V3a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-8A.5.5 0 015 13v-1.5a.5.5 0 00-1 0V13a1.5 1.5 0 001.5 1.5h8z" clip-rule="evenodd"/>
          </svg>
        </nav>
        <div className="text">
          <p>Maximize User Experience
Elevate</p>
          <Typewriter
              onInit={(typewriter) => {
              typewriter.typeString('Training')
                .pauseFor(2000)
                .deleteAll()
                typewriter.typeString('Onboarding')
                .pauseFor(2000)
                .deleteAll()
                typewriter.typeString('Productivity')
                .start();
            }}
          />
          <button type="button" className="btn btn-outline-primary">Get Started</button>
          </div>
          <div className="subPage">
            <p className="subText">
              <h1>Ziplyne</h1>
            In-App Guidance + Self Service = The New
SaaS Experience!</p>
          <div className="images_subPage">
          <img className="introImage" src="https://ziplyne.s3-us-west-1.amazonaws.com/Untitled+design+(15).png" alt="introImage" />
          <img className="diamondImage" src="https://ziplyne.s3-us-west-1.amazonaws.com/Diamond.png" alt="diamondImage" />
          </div>
          <p className="introText">Ziplyne isn't just a tutorial or tool...It's a seamless omnichannel
solution for employees and customers alike!</p>
          </div>
      </div>
    )

}
export default App;
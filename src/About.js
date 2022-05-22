import React from 'react'
import laptop from './images/Laptop.png'
const About = () => {
  return (
    <div class="container about" id="about">
    <h1>About Me</h1>
    <div class="aboutContainer row">
      <div class="aboutImg col-md">
        <img src={laptop } alt=""/>
      </div>
      <div class="col-md">
        <p>I am currently studying B Tech Information Technology at Pune Institute of Computer Technology. I love solving problems and exploring new domains. Apart from coding I also like cooking and gardening.</p>
      </div>
    </div>
</div>
  )
}

export default About
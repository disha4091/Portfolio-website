import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Disha Chavan</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#education">Education</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#experience">Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#contact">Contact</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
  )
}

export default Navbar
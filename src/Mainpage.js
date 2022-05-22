import React from 'react'
import mainphoto from './images/Disha_Photo.jpg'
const Mainpage = () => {
  return (
    <div class="mainContainer">
        <div id="main" class="container row">
          <section class="col-md container1">
              <div class="writing">
              <h1> Hello I am Disha Chavan! </h1>
              </div>
            </section>
            <div class="col-md mainImg">
                <img src={mainphoto} alt=""/>
            </div>
        </div>
    </div>
    
  )
}

export default Mainpage
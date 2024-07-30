import React from 'react'
//import images from '../assets/hero/'
// how to do the images with a function?
function Hero() {

    return (
        <div className="row hero">
        <div className="container">
            <div className="hero-container">
                <div className="hero-column one">
                    <img src="../src/assets/hero/1.png" />
                </div>
                <div className="hero-column two">
                <img src="../src/assets/hero/9.png" />
                <img src="../src/assets/hero/3.png" />
                </div>
                <div className="hero-column three">
                <img src="../src/assets/hero/4.png" />
                <img src="../src/assets/hero/5.png" />

                </div>
                <div className="hero-column four">
                <img src="../src/assets/hero/6.png" />
                <img src="../src/assets/hero/7.png" />
                 </div>
                 <div className="hero-column five">
                <img src="../src/assets/hero/8.png" />
                <img src="../src/assets/hero/2.png" />

                 </div>
            </div>

            <h1>Online Experiences</h1>     
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>   
        </div>
    </div>
    )
}

export default Hero
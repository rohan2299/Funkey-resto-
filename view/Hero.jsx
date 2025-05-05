import React from 'react'
import Page from '../assets/main.png'

const Hero = () => {
  return (
    <div class="heroHome">
    <div class="hero">
        <div class="hero_image">
            <img src={Page} alt="Hero" height="500px"/>
        </div>
        <div class="hero_content">
         <h1>Start Your Day With Coffee..! </h1>
        </div>
    </div>
 </div>
  )
}

export default Hero;

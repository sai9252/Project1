import React from 'react';
import "./Home.css"
import Intro from '../Intro/Intro';
import Video from "../../Images/1111.mp4"


const Home = () => {
  return (
    <div id="Home">
      <video className="homevideo" src={Video} autoPlay loop muted/>
        <Intro/>
    </div>
  )
}

export default Home;
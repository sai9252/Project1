import React from 'react';
import Typewriter from 'typewriter-effect';
import "./Intro.css"

const Intro = () => {
  return (
    <div className='intro'>
      <Typewriter
  options={{
    strings: ['Sri Sai Tractor Suppliers','శ్రీ సాయి ట్రాక్టర్ సప్లైయర్స్', 'श्री साई ट्रैक्टर सप्लायर्स'],
    autoStart: true,
    loop: true,
  }}
/>

    </div>
  )
}

export default Intro
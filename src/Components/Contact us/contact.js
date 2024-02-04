import React from 'react';
import Insta from '../../Images/Insta.png';
// import Link from '../../Images/link.png';
import Fb from '../../Images/fb.png';
import Twit from '../../Images/twit.png';
import Phn from '../../Images/contact.jpg'
import Mail from '../../Images/mail.png';
import "./contact.css"


const contact = () => {
  return (
    <div id="contactus">
        <div className="contname">CONTACT US</div>
        <div className="continfo1">
          <div className="contsoc">
            <div className="contpic1">
              <img src={Phn} alt='Phn' className='img1'></img>
              <div>9866002589</div>
            </div>
            <div className="contpic2">
              <img src={Mail} alt='Mail' className='img1'></img>
              <div> sairam9207@gmail.com</div>
            </div>
          </div>
          <div className="contsoc1">
            <div className="continsta">
              <img src={Insta} alt='Insta' className='img'></img>
            </div>
            <div className="contfb">
              <img src={Fb} alt='FB' className='img'></img>
            </div>
            <div className="conttwit">
              <img src={Twit} alt='Twitter' className='img'></img>
            </div>
            {/* <div className="contlink">
              <img src={Link} alt='Linkdin' className='img'></img>
            </div> */}
          </div>
        </div>
      </div>
  )
}

export default contact
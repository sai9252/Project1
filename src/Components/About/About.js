import React from 'react';
import "./About.css"
// import Pic from "../../Images/tractor.jpeg"

const About = () => {
  return (
    <div id="Aboutcontent" >
      <div className="Abouttitle">
        ABOUT
      </div>
      <div className="Aboutinformation">
        <div className="Aboutpic">
          <img src="" alt="img" className="Aboutimg" />
        </div>
        <div className="info">
        <span className="Aboutinfo0">As a former farmer, I embarked on a new venture by establishing a small business named Sri Sai Tractor Suppliers.The primary focus of this enterprise is to offer tractors for the transportation of paddy to rice mills and other designated locations. </span>
        {/* <span className="Aboutinfo1">In addition to providing tractor services, I decided to extend support to fellow farmers by offering financial assistance for their farming needs.This involves providing them with monetary aid, which they are expected to repay after the successful harvesting of their crops.</span> */}
        <span className="Aboutinfo2">"Sri Sai Tractor Suppliers"</span>
        <span className="Aboutinfo3">It aims to bridge the gap between agricultural activities and efficient transportation, ensuring a seamless process for farmers in need of such services.<br /></span>
        <span className="Aboutinfo4">By combining the provision of tractors with financial assistance, the business seeks to contribute to the prosperity of local farming communities, fostering a sustainable and mutually beneficial relationship.</span>
      </div>
      </div>
    </div>
  )
}

export default About;
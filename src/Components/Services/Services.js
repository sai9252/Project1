import React from 'react';
import "./Services.css";
const Services = () => {
  return (
    <div id='service'>
      <div className="serid">SERVICES</div>
      <div className="sernum">
        <div className="ser">
          <div className="ser1">
            Transportation
            </div>
          <div className="sercon">Facilitate the efficient transport of harvested crops from the farms to the rice mills, ensuring a seamless connection between producers and processors.</div>
        </div>
        <div className="ser">
          <div className="ser2">
            Crop Harvesting Equipment Rental
            </div>
          <div className="sercon">Offer a variety of crop harvesting equipment for rent, including combine harvesters and specialized machinery, to streamline the harvesting process.</div>
        </div>
        <div className="ser">
          <div className="ser3">
            Market Linkage Support for Crop Sales
            </div>
          <div className="sercon">Facilitate market linkages for farmers, connecting them with potential buyers to ensure a smooth transition from harvesting to selling.
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services
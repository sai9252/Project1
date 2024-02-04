import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTriggr from 'react-scroll-trigger';
import "./Accomplishment.css"

const Accomplishment = () => {
  const [counteron, setCounteron] = useState(false);
  return (
    <ScrollTriggr onEnter={() => setCounteron(true)} onExit={() => setCounteron(false)}>
      <div id="Accintro">
        <div className="accname">ACCOMPLISHMENTS</div>
        <div className="acccon1">
          <div className="acccon">
            <div className="accnames">Workers</div>
            <div className="accpeople">{counteron && <CountUp
              start={0}
              end={100}
              duration={5}
              delay={0.3} />}
              <div>+</div>
            </div>
          </div>
          <div className="acccon">
            <div className="accnames">Transportation</div>
            <div className="acctrans">  {counteron && <CountUp
              start={0}
              end={50}
              duration={5}
              delay={0.3} />} 
              <div>+</div>
              </div>
          </div>
          <div className="acccon">
            <div className="accnames">Mills</div>
            <div className="accmills">{counteron && <CountUp
              start={0}
              end={200}
              duration={5}
              delay={0.3} />}
              <div>+</div>
              </div>
          </div>
          <div className="acccon">
            <div className="accnames">Paddy</div>
            <div className="accpaddy">{counteron && <CountUp
              start={0}
              end={100000}
              duration={5}
              delay={0.3} />}
              <div>+</div>
              </div>
          </div>
        </div>
      </div>
    </ScrollTriggr>
  )
}

export default Accomplishment;
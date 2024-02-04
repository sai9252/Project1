// import Intro from "./Components/Intro/Intro.js"
import Navbar from "./Components/Navbar/navbar.js"
import About from "./Components/About/About.js"
import Accomplishment from "./Components/Accomplishments/Accomplishment.js"
import ContactUS from "./Components/Contact us/contact.js"
import Services from "./Components/Services/Services.js"
import Home from "./Components/Home/Home.js"
import  "./App.css";


function App() {
  return (
    <div className="App" id="home">
      <Navbar/>
      <div  style={{marginInline:"3rem"}}>
      <div >
        <Home/>
        </div>
      <div className="section" id="about">
        <About/>
        </div>
      <div className="section" id="ser">
        <Services/>
        </div>
      <div className="section" id="acc">
        <Accomplishment />
        </div>
      <div className="section" id="contact">
        <ContactUS/>
        </div>
      </div>
    </div>
  );
}

export default App;

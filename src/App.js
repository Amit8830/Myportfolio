import React from "react"
import './App.css';
import MyNav from "./component/my-navBar/myNav";
import MyCarousal from "./component/mycarousal/mycarousal";
import TitleMessage from "./component/title-message/titlemessage";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Skills from './pages/skills/skills'
import ProjectTimeline from './component/projecttimeline/project'
import Contact from "./pages/contact/contact";
import Footer from "./component/footer/footer";
// import Particles from "react-particles-js";
// import { particleOption } from "./particleOption"

import About from './pages/about/about'

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNav />
      <MyCarousal />
      <TitleMessage />

{/* <Particles
        className="particles particles-box"
        params={particleOption}
      /> */}


      <div>
        <Parallax blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}>
          <Container className="container-box rounded" >
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <ProjectTimeline />
          </Slide>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Contact />
          </Slide>
        </Container>
      </div>
      <hr />
      <Footer />

    </div>

  );
}

export default App;

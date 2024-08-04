import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg"; // Placeholder for new skill image
import meter5 from "../assets/img/meter5.svg"; // Placeholder for new skill image
import meter6 from "../assets/img/meter6.svg"; // Placeholder for new skill image
import meter7 from "../assets/img/meter7.svg"; // Placeholder for new skill image
import meter8 from "../assets/img/meter8.svg"; // Placeholder for new skill image
import meter9 from "../assets/img/meter9.svg"; // Placeholder for new skill image
import meter10 from "../assets/img/meter10.svg"; // Placeholder for new skill image
import meter11 from "../assets/img/meter11.svg"; // Placeholder for new skill image
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Web Development" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Python" />
                                <h5>Python</h5>
                            </div>
                           
                            <div className="item">
                                <img src={meter4} alt="C" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="C++" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="HTML" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="CSS" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Django" />
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="MongoDB" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Postman" />
                                <h5>Postman</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

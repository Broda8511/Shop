import React from 'react';
import '../styles/about.css';
import aboutImg from '../images/about.jpg';

const AboutPage = () => {
    return (
        <>
            <div className="about__header">
                <h2>About Us</h2>
            </div>

            <div className="about">
              <div className="about__paragraph">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab debitis omnis accusamus earum quibusdam totam ex beatae repudiandae illum iste quae tempora fuga facilis ullam alias, quam qui numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab debitis omnis accusamus earum quibusdam totam ex beatae repudiandae illum iste quae tempora fuga facilis ullam alias, quam qui numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab debitis omnis accusamus earum quibusdam totam ex beatae repudiandae illum iste quae tempora fuga facilis ullam alias, quam qui numquam.</p>
              </div>

            <div className="about__image"><img className="about__pic" src={aboutImg} alt="about"/></div>
          </div>
        </>
      );
}
 
export default AboutPage;
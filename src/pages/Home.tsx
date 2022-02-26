import Hero from '../components/hero/Hero';
import { Element } from 'react-scroll';
import { ABOUT_ELEMENT_ID, CONTACT_ELEMENT_ID, HOME_ELEMENT_ID, PORTFOLIO_ELEMENT_ID, RESUME_ELEMENT_ID } from '../constants';
import { scrollTo } from '../utils/scroll';
import About from '../components/views/about/About';
import Container from '../components/layout/Container';
import Resume from '../components/views/resume/Resume';
import Portfolio from '../components/views/portfolio/Portfolio';
import Contact from '../components/views/contact/Contact';

const Home = () => {  
  return (
      <div id={HOME_ELEMENT_ID}>
        <Element name={HOME_ELEMENT_ID}>
          <Hero scrollTo={() => scrollTo(PORTFOLIO_ELEMENT_ID)} />
        </Element>
        <Container>
          <Element name={PORTFOLIO_ELEMENT_ID}>
            <Portfolio />
          </Element>
          <Element name={ABOUT_ELEMENT_ID}>
            <About />
          </Element>
          <Element name={RESUME_ELEMENT_ID}>
            <Resume />
          </Element>
          <Element name={CONTACT_ELEMENT_ID}>
            <Contact />
          </Element>
        </Container>
      </div>
  )
};

export default Home;

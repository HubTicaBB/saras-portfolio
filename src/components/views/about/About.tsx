import { content } from '../../../fixtures'
import Section from '../../layout/Section';

const About = () => {
  return (
    <Section title={content.about.title}>      
      {content.loremIpsum}
    </Section>
  )
};

export default About;

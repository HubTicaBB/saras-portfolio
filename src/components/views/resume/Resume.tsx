import { content } from '../../../fixtures'
import Section from '../../layout/Section';

const Resume = () => {
  return (
    <Section title={content.resume.title}>      
      {content.loremIpsum}
    </Section>
  )
};

export default Resume;
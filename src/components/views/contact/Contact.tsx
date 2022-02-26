import { content } from '../../../fixtures'
import Section from '../../layout/Section';

const Contact = () => {
  return (
    <Section title={content.contact.title}>      
      {content.loremIpsum}
    </Section>
  )
};

export default Contact;
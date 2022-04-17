import Section from '../../layout/Section';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation(['content']);

  return (
    <Section title={t('content:about.title')}>
      {t('content:about.description')}
    </Section>
  );
};

export default About;

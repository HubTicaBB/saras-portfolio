import Section from '../../layout/Section';
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const { t } = useTranslation(['content']);

  return (
    <Section title={t('content:resume.title')}>
      {t('content:resume.description')}
    </Section>
  );
};

export default Resume;

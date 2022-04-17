import Section from '../../layout/Section';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation(['content']);

  return (
    <Section title={t('content:contact.title')}>
      {t('content:contact.description')}
    </Section>
  );
};

export default Contact;

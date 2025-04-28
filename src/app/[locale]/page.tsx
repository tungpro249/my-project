'use client';

import { useTranslation } from 'next-i18next';
import { useParams } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Page() {
  const { locale } = useParams();
  const { t } = useTranslation('common');

  return (
    <div>
      <LanguageSwitcher />
      <h1>{t('greeting')}</h1>
      <p>{t('description')}</p>
      <p>Current Locale: {locale}</p>
    </div>
  );
}

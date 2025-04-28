'use client';

import { useRouter, useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = useParams();

  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'vn' : 'en';
    router.push(`/${newLocale}`);
  };

  return (
    <button onClick={switchLanguage} style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', borderRadius: '4px' }}>
      Switch Language
    </button>
  );
}

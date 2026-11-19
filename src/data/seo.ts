// Shared facts for search engines and AI assistants (structured data).
export const SITE = 'https://sobiinteractive.com';
export const EMAIL = 'contact@sobiinteractive.com';

export const GENRES = ['Casual', 'Puzzle', 'Hybrid-casual', 'Hybrid puzzle', 'Idle', 'Hybrid idle'];

export const organization = {
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'SOBI Interactive',
  alternateName: 'SOBI',
  legalName: 'Sophia Business Innovation Company Limited',
  url: SITE,
  logo: `${SITE}/logo-512.png`,
  image: `${SITE}/og/og-home.png`,
  email: EMAIL,
  slogan: 'Think big from small games.',
  description:
    'SOBI Interactive is a mobile game studio in Vietnam making casual, puzzle, hybrid-casual, hybrid puzzle, idle and hybrid idle games for Android and iOS. It works with publishers through co-development with revenue share, full-service development, and games from its existing library.',
  address: { '@type': 'PostalAddress', addressCountry: 'VN' },
  areaServed: 'Worldwide',
  knowsAbout: [...GENRES.map((g) => `${g} mobile games`), 'Mobile game development', 'Game prototyping', 'Co-development'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'business partnerships',
    email: EMAIL,
    availableLanguage: ['English', 'Vietnamese'],
  },
};

export const orgRef = { '@id': `${SITE}/#organization` };

export const website = {
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  name: 'SOBI Interactive',
  url: SITE,
  inLanguage: 'en',
  publisher: orgRef,
};

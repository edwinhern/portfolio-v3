const defaultSEOConfig = {
  title: 'Edwin H - Portfolio',
  description:
    'Edwin H is a software developer specialized in front-end and back-end development.',
  canonical: 'https://www.edwinhern-portfolio.com/',
  openGraph: {
    url: 'https://www.edwinhern-portfolio.com/',
    title: 'Edwin H - Portfolio',
    description:
      'Edwin H is a software developer specialized in front-end and back-end development. This portfolio showcases his projects and professional experience.',
    images: [
      {
        url: '/me.png',
        width: 1080,
        height: 920,
        alt: 'Edwin H Portfolio',
        type: 'image/jpeg',
      },
    ],
    siteName: 'Edwin H Portfolio',
  },
  twitter: {
    handle: '@EdwinH',
    site: '@edwinhern-portfolio',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;

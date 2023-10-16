const defaultSEOConfig = {
  title: 'Edwin H - Portfolio',
  description:
    'Edwin H is a software developer specialized in front-end and back-end development.',
  canonical: 'https://www.edwinhportfolio.com/',
  openGraph: {
    url: 'https://www.edwinhportfolio.com/',
    title: 'Edwin H - Portfolio',
    description:
      'Edwin H is a software developer specialized in front-end and back-end development. This portfolio showcases his projects and professional experience.',
    images: [
      {
        url: 'https://source.unsplash.com/random/1080x920?tesla',
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
    site: '@EdwinHPortfolio',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;

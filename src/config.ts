import { getPermalink } from './utils/permalinks';

const I18N = {
  language: 'en',
  textDirection: 'ltr',
};

const SITE = {
  name: 'DAX Foundation',
  site: 'https://daxfoundation.org',
  base: '/',
  trailingSlash: 'never',
  title: 'DAX Foundation',
  description: 'Open-source tools for equitable education and sovereign knowledge',
};

const METADATA = {
  title: SITE.title,
  description: SITE.description,
};

const APP_BLOG = {
  isEnabled: false,
};

const UI = {
  theme: 'system',
};

const ANALYTICS = {
  vendors: {
    googleAnalyticsId: '',
  },
};

const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'GitHub', href: 'https://github.com/daxfoundation', target: '_blank' },
    { text: 'Open Collective', href: 'https://opencollective.com/daxfoundation', target: '_blank' },
  ],
};

const footerData = {
  links: [
    {
      title: 'Community',
      links: [
        { text: 'GitHub', href: 'https://github.com/daxfoundation', target: '_blank' },
        { text: 'Open Collective', href: 'https://opencollective.com/daxfoundation', target: '_blank' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'EdDAX', href: 'https://github.com/daxfoundation/eddax', target: '_blank' },
        { text: 'NovaDax', href: 'https://github.com/daxfoundation/novadax', target: '_blank' },
        { text: 'SkippyDAX', href: 'https://github.com/daxfoundation/skippydax', target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/daxfoundation', target: '_blank' },
  ],
  footNote: 'Made with care by the DAX Foundation community. Open source, forever free.',
};

export { I18N, SITE, METADATA, APP_BLOG, UI, ANALYTICS, headerData, footerData };

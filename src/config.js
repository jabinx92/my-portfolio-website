module.exports = {
  siteTitle: 'Jonathan Won | Software Engineer',
  siteDescription:
    'Jonathan Won is a software engineer based in San Francisco, CA who specializes in building exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Jonathan Won, Jonathan, Won, jonathanwon, software engineer, front-end engineer, web developer, javascript',
  siteUrl: 'https://jonathanwon.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Jonathan Won',
  location: 'San Francisco, CA',
  email: 'jabinx92@gmail.com',
  github: 'https://github.com/jabinx92',
  twitterHandle: '@twitter',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/jabinx92',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jonathanwon',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/johnnywony',
    },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#000099',
    navy: '#000000',
    darkNavy: '#000099',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

module.exports = {
  title: 'yellowmessenger',
  description: 'Documentation',
  logo: '/favicon.png',
  footer: 'Copyright © 2019-present YellowMessenger💖',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    nav: [
      {
        text: 'Beginner Guide',
        link: '/beginner-guide'
      },
      {
        text: 'Developer',
        link: '/developer-guide'
      },
      {
        text: 'Go to Console',
        link: 'https://app.yellowmessenger.com'
      }
    ],
    sidebar: {
      '/beginner-guide/': [
        'introduction',
        {
          title: 'Design Guidelines',
          collapsable: false,
          children: ['design-guide-line']
        }
      ],
      '/developer-guide/': [
        'introduction',
        'test',
        {
          title: 'Functions',
          collapsable: false,
          children: [
            'send-text-message',
            'send-quick-replies',
            'send-cards',
            'custom-handler'
          ]
        },
        {
          title: 'Validators',
          collapsable: false,
          children: [
            'group-1-item',
            'phone-validator',
            'age-validator',
            'dob-validator',
            'name-validator',
            'yes-no-validator'
          ]
        },
        'further-reading'
      ]
    }
  }
};

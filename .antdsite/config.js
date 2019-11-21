module.exports = {
  title: 'yellowmessenger',
  description: 'Documentation',
  logo: '/favicon.png',
  footer: 'Copyright © 2019-present YellowMessenger💖',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    repo: 'SuveshBaskar/YM-Doccs', // Assumes GitHub. Can also be a full Gitee url  Defaults to "GitHub"/"Gitee"/"Bitbucket" depending on `themeConfig.repo`
    docsRepo: 'SuveshBaskar/YM-Doccs', // Custom document repo, default to docsRepo
    // docsRelativeDir: 'packages/docs', // Relative path from project root to docs folder.
    docsDir: 'docs', // The directory of document
    docsBranch: 'master', // The git branch of document
    editLinks: true, // // defaults to false, set to true to enable
    editLinkText: 'Help us improve this page!', // custom text for edit link. Defaults to "Edit this page"
    showAvatarList: true, // Whether to display a list of users who edited this page, set it to false to disable

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
            'yes-no-validator',
            'group-1-item2',
            'phone-validator2',
            'age-validator2',
            'dob-validator2',
            'name-validator2',
            'yes-no-validator2'
          ]
        },
        'further-reading'
      ]
    }
  }
};

module.exports = {
  title: 'yellowmessenger',
  description: 'Documentation',
  logo: '/favicon.png',
  footer: 'Copyright © 2019-present YellowMessenger💖',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    repo: 'YvesCoding/antdsite', // Assumes GitHub. Can also be a full Gitee url  Defaults to "GitHub"/"Gitee"/"Bitbucket" depending on `themeConfig.repo`
    docsRepo: 'YvesCoding/antdsite', // Custom document repo, default to docsRepo
    docsRelativeDir: 'packages/docs', // Relative path from project root to docs folder.
    docsDir: 'docs', // The directory of document
    docsBranch: 'master', // The git branch of document
    editLinks: true, // // defaults to false, set to true to enable
    editLinkText: 'Help us improve this page!', // custom text for edit link. Defaults to "Edit this page"
    nav: [
      {
        text: 'Guide',
        link: '/guide'
      },
      {
        text: 'Blog',
        link: '/blogs'
      }
    ],
    sidebar: {
      '/guide/': [
        'introduction',
        {
          title: 'Response Functions',
          collapsable: false,
          children: ['sendTextMessage', 'sendQuickReplies']
        },
        {
          title: 'Validators',
          collapsable: false,
          children: [
            {
              title: 'Pattern Matching',
              children: ['group-1-item']
            },
            {
              title: 'Other Validators',
              children: ['group-2-item']
            }
          ]
        },
        {
          title: 'Design Guidelines',
          collapsable: false,
          children: ['designGuideLine']
        },
        'snippets'
      ],
      '/blogs/': [
        'introduction',
        {
          title: 'Recent Blogs',
          collapsable: false,
          children: ['blogOne', 'blogTwo']
        }
      ]
    }
  }
};

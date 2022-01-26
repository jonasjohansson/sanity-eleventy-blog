export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f1d801b0a3dd541daf84f7',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ntbswam8',
                  apiId: 'db114558-f14b-4426-b880-01e2bda53df4'
                },
                {
                  buildHookId: '61f1d8023e80e95f2e2e6dd0',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-mijuf8xj',
                  apiId: 'f6bf8001-5582-421e-b3c5-0b541f4764a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonasjohansson/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-mijuf8xj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

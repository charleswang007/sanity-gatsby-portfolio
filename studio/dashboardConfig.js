export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6264da5c24f61257a898a488',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-a2a9ub9f',
                  apiId: 'e66cc6e7-c743-4d0d-8fc6-feb4051594d5'
                },
                {
                  buildHookId: '6264da5daa845855c2b28c5e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-w6mt6mmw',
                  apiId: '46da1bdd-c0e9-445c-a8d3-5ffe367d41f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/charleswang007/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-w6mt6mmw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

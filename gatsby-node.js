const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve('src/templates/ArticleTemplate/ArticleTemplate.js');
  const result = await graphql(`
    query queryCMSPage {
      allDatoCmsArticle {
        nodes {
          id
          title
        }
      }
    }
  `);

  result.data.allDatoCmsArticle.nodes.forEach(({ title, id }) => {
    const slug = slugify(title, { lower: true });

    createPage({
      path: `articles/${slug}`,
      component: articleTemplate,
      context: {
        articleId: id,
      },
    });
  });
};

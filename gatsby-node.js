const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // ページネーション関数buildPaginationを作成
  const buildPagination = posts => {
    paginate({
      createPage,
      items: posts,
      itemsPerPage: 10,
      // 2ページ目以降はURLに"/page"が付与されるよう設定
      pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/" : "/page"),
      component: path.resolve("src/templates/index.js"),
    })
  }

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const posts = result.data.allMarkdownRemark.edges

    // buildPagination関数の実行
    buildPagination(posts)
  })
}

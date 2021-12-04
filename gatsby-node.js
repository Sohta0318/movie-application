exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/user/)) {
    page.matchPath = "/user/*"
    createPage(page)
  }
}

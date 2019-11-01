const createPosts = require(`./utils/createPosts`)
const createPages = require(`./utils/createPages`)
const createUsers = require(`./utils/createUsers`)
const createCategories = require(`./utils/createCategories`)
const createTags = require(`./utils/createTags`)

// Allow self-signed certificates
process.env[`NODE_TLS_REJECT_UNAUTHORIZED`] = 0

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createPages({ actions, graphql })
  await createUsers({ actions, graphql })
  await createCategories({ actions, graphql })
  await createTags({ actions, graphql })
}

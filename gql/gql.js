
var { graphql, buildSchema } = require("graphql")

var schema = buildSchema(`
  type Query {
    
  }
`)

var rootValue = { hello: () => "Hello world!" }

var source = await fetch("https://api.alquran.cloud/v1/surah/1");

graphql({ schema, source, rootValue }).then(response => {
  console.log(response)
})



const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    greetings: String
  }
`;

const resolvers = {
  Query: {
    greetings: () => {
      return "Hello from Graphql Wrold!";
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: 9000 })
  .then(({ url }) => console.log(`server running at ${url}`));

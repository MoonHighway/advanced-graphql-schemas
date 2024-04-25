// 1. Import the dependencies at the top of this file
// 2. Write our resolver functions
// 3. Build the function that starts the server and creates the subgraph

const typeDefs = gql`
  type Dog {
    id: ID!
    name: String!
    weight: Float!
    photo: Photo!
  }

  type Photo {
    full: String!
    thumb: String!
  }

  type Query {
    allDogs: [Dog!]!
    dogCount: Int!
  }
`;

const resolvers = {
  Query: {
    allDogs: () => dogs,
    dogCount: () => dogs.length
  }
};

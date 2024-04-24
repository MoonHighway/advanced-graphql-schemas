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

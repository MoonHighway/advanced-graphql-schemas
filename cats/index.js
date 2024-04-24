const typeDefs = gql`
  type Cat {
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
    allCats: [Cat!]!
    catCount: Int!
  }
`;

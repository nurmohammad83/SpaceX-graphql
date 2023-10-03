import { gql } from "./__generated__";

export const GET_SHIPS = gql(/* GraphQL */ `
  query Ships($limit: Int, $offset: Int) {
    ships(limit: $limit, offset: $offset) {
      id
      name
      image
      active
      type
      home_port
      year_built
    }
  }
`);
export const GET_ROCKETS = gql(/* GraphQL */ `
  query Rockets {
    rockets {
      name
      description
      height {
        feet
      }
      stages
      type
    }
  }
`);

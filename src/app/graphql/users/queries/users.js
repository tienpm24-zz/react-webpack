import { gql } from 'adapters/apollo-client';

export const GET_USERS = gql`
  {
    users {
      data {
        id
        name
        username
        email
      }
    }
  }
`;

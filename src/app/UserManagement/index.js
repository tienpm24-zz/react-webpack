import { styled } from 'adapters/styled-components';

import React from 'react';
import { ApolloProvider } from 'adapters/apollo-client';
import { client } from '../graphql';
import { UserProvider } from '../context/user/UserContext';

import UserList from './components/UserList';
import UserForm from './components/UserForm';

const Wrapper = styled.div`
  display: flex;
`;

const UserManagement = () => {
  return (
    <ApolloProvider client={client}>
      <h2>List users</h2>
      <UserProvider>
        <Wrapper>
          <UserList />
          <UserForm />
        </Wrapper>
      </UserProvider>
    </ApolloProvider>
  );
};

export default UserManagement;

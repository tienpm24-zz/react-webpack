import { styled } from 'adapters/styled-components';

import React, { useContext } from 'react';
import { useMutation } from 'adapters/apollo-client';

import { CREATE_USER, UPDATE_USER } from '../../graphql/users/mutations/users';
import { GET_USERS } from '../../graphql/users/queries/users';
import { UserContext } from '../../context/user/UserContext';

const Form = styled.div`
  flex: 1;
  form {
    display: flex;
    flex-direction: column;
    max-width: 200px;
    flex: 1;
    padding: 10px;
    margin: auto;
  }
`;

const Action = styled.div`
  display: flex;
`;

const UserForm = () => {
  const user = useContext(UserContext);

  const [createUser] = useMutation(CREATE_USER);
  const [updateUser] = useMutation(UPDATE_USER);

  const onSubmitForm = (e) => {
    e.preventDefault();
    createUser({
      variables: {
        input: { name: user.name, username: user.username, email: user.email },
      },
      update: (cache, { data: { createUser } }) => {
        const existingUser = cache.readQuery({ query: GET_USERS });
        const createdUsers = [...existingUser.users.data, createUser];
        cache.writeQuery({
          query: GET_USERS,
          data: { users: { data: createdUsers } },
        });
      },
    });
  };

  const onUpdateUser = (e) => {
    e.preventDefault();
    updateUser({
      variables: {
        id: user.id,
        input: {
          name: user.name,
          username: user.username,
          email: user.email,
        },
      },

      update: (cache, { data: { updateUser } }) => {
        const data = cache.readQuery({ query: GET_USERS });
        updateUser.id = user.id;
        const updatedUser = data.users.data.map((_user) =>
          _user.id === user.id ? updateUser : _user
        );
        cache.writeQuery({
          query: GET_USERS,
          data: { users: { data: updatedUser } },
        });
      },
    });
  };

  const onResetForm = () => {
    user.setName('');
    user.setUsername('');
    user.setEmail('');
  };

  return (
    <Form>
      <form>
        <label>Name</label>
        <input
          type='text'
          onChange={(e) => user.setName(e.target.value)}
          value={user.name}
        />
        <label>Username</label>

        <input
          type='text'
          onChange={(e) => user.setUsername(e.target.value)}
          value={user.username}
        />
        <label>email</label>
        <input
          type='text'
          onChange={(e) => user.setEmail(e.target.value)}
          value={user.email}
        />
        <Action>
          {user.selected ? (
            <button onClick={onUpdateUser}>Edit</button>
          ) : (
            <button onClick={onSubmitForm}>Submit</button>
          )}

          <button onClick={onResetForm}>Cancel</button>
        </Action>
      </form>
    </Form>
  );
};

export default UserForm;

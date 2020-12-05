import { styled } from 'adapters/styled-components';

import React, { Fragment, useContext } from 'react';
import { useQuery, useMutation } from 'adapters/apollo-client';

import { UserContext } from '../../context/user/UserContext';
import { GET_USERS } from '../../graphql/users/queries/users';
import { DELETE_USER } from '../../graphql/users/mutations/users';

const Table = styled.table`
  width: 100%;
  flex: 2;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
`;

const UserList = () => {
  const user = useContext(UserContext);
  const { loading, error, data } = useQuery(GET_USERS);
  const [deleteUser] = useMutation(DELETE_USER);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const onDeleteUser = (id) => {
    deleteUser({
      variables: { id },
      update: (cache) => {
        const data = cache.readQuery({ query: GET_USERS });
        const _data = data.users.data.filter((user) => user.id !== id);
        cache.writeQuery({
          query: GET_USERS,
          data: { users: { data: _data } },
        });
      },
    });
  };

  const onUpdateUser = (data) => {
    user.setId(data.id);
    user.setName(data.name);
    user.setUsername(data.username);
    user.setEmail(data.email);
    user.setSelected(true);
  };

  return (
    <Fragment>
      <Table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>User name</td>
            <td>email</td>
            <td>Actions</td>
          </tr>

          {data.users.data.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>
                <button onClick={() => onUpdateUser(data)}>Edit</button>
                <button onClick={() => onDeleteUser(data.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default UserList;

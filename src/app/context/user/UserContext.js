import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState(false);

  return (
    <UserContext.Provider
      value={{
        id,
        name,
        username,
        email,
        selected,
        setSelected,
        setId,
        setName,
        setUsername,
        setEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

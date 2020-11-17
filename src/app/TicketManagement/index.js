import styled from 'styled-components';
import React, { useState } from 'react';

import imgSrc from '../../assets/webpack.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  background-color: black;
  color: #fff;
  padding: 10px;
`;

const TicketManagement = ({ name }) => {
  const [count, setCount] = useState(0);

  if (count > 4) {
    throw new Error('crashed');
  }
  return (
    <Wrapper>
      <p>
        Ticket's name: <strong>{name}</strong>
      </p>

      <img src={imgSrc} />
      <h1>Count to crash app: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Count to crash App</button>
    </Wrapper>
  );
};

export default TicketManagement;

import { styled } from 'adapters/styled-components';

import React from 'react';

import imgSrc from '../../assets/webpack.svg';

import withCounter from 'base/higher-order-components/withCounter';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  background-color: black;
  color: #fff;
  padding: 10px;
`;

const TicketManagement = ({ name, count, incrementCount }) => {
  return (
    <Wrapper>
      <p>
        Ticket's name: <strong>{name}</strong>
      </p>

      <img src={imgSrc} />
      <h1>Count to crash app: {count} </h1>
      <button onClick={incrementCount}>Count to crash App</button>
    </Wrapper>
  );
};

export default withCounter(TicketManagement);

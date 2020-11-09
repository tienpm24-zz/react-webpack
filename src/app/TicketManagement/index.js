import styled from 'styled-components';
import React from 'react';

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
  return (
    <Wrapper>
      <p>
        Ticket's name: <strong>{name}</strong>
      </p>

      <img src={imgSrc} />
    </Wrapper>
  );
};

export default TicketManagement;

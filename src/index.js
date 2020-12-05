import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import TicketManagement from './app/TicketManagement';
import UserManagement from './app/UserManagement';
import { ErrorBoundary } from 'base/error-boundary/ErrorBoundary';

ReactDOM.render(
  <Fragment>
    <ErrorBoundary>
      <TicketManagement name='Thor: Love and thunder' />
    </ErrorBoundary>
    <UserManagement />
  </Fragment>,

  document.getElementById('root')
);

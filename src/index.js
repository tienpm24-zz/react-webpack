import React from 'react';
import ReactDOM from 'react-dom';

import TicketManagement from './app/TicketManagement';
import { ErrorBoundary } from './packages/base/error-boundary/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <TicketManagement name='Thor: Love and thunder' />
  </ErrorBoundary>,
  document.getElementById('root')
);

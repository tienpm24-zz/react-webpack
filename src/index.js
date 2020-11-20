import React from 'react';
import ReactDOM from 'react-dom';

import TicketManagement from './app/TicketManagement';
import { ErrorBoundary } from './packages/base/error-boundary/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <TicketManagement />
  </ErrorBoundary>,
  document.getElementById('root')
);

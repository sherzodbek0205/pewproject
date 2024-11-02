/* eslint-disable import/no-duplicates */
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Routes from 'routes/routes';

import { Home } from 'pages';

import 'assets/styles/tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <div className="flex">
      <Home />

      <Routes />
    </div>
  </BrowserRouter>
);

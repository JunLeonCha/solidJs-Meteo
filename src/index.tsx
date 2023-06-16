/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './Views/App';
import Error from './Views/Errors/Error404'
import { Router, Route, Routes } from '@solidjs/router';

const root = document.getElementById('root');

render(() => (
  <Router>
    <Routes>
      <Route path="/*" component={Error}></Route>
      <Route path="/" component={App}></Route>
    </Routes>
  </Router>
), root!);

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import BaseLayout from './components/BaseLayout';
import Home from './components/Home'
import MugStore from './components/MugStore';
import PosterStore from './components/PosterStore';
import ShirtStore from './components/ShirtStore';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/shirts" component={ShirtStore} />
      <Route path="/mugs" component={MugStore} />
      <Route path="/posters" component={PosterStore} />
    </Switch>
  </BaseLayout>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

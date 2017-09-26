import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import BaseLayout from './components/BaseLayout';
import Home from './components/Home'
import MugStore from './components/MugStore';
import PosterStore from './components/PosterStore';
import ShirtStore from './components/ShirtStore';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/shirts" component={ShirtStore} />
      <Route path="/mugs" component={MugStore} />
      <Route path="/posters" component={PosterStore} />
      <Route path="/contactUs" component={ContactUs}/>
      <Route path="/aboutUs" component={AboutUs}/>
    </Switch>
  </BaseLayout>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

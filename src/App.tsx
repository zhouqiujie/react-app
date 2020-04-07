import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
// import { MyHeader } from './components/index'
// import { IndexPage, AboutPage, HomePage } from './pages'
import { SiteRoutes, RouteWithSubRoutes } from './routes';

function App() {
  const routes = SiteRoutes;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Switch>
          {/*  <Route path="/about" component={AboutPage}></Route>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/" component={IndexPage}></Route> */}
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default App;

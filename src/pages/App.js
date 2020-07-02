import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './home/Home'
import TheNewYorkTimes from './newYorkTimes/index'
import EasyResponsive from './easyResponsive/index'
import WebPage from './webPage/index'
import CorpSolutions from './corpSolutions/index'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/newYorkTimes" component={ TheNewYorkTimes } />
        <Route exact path="/easyResponsive" component={ EasyResponsive } />
        <Route exact path="/webPage" component={ WebPage } />
        <Route exact path="/corpSolutions" component={ CorpSolutions } />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
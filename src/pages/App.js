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
        <Route exact path="/React_Exercices" component={ Home } />
        <Route exact path="/React_Exercices/newYorkTimes" component={ TheNewYorkTimes } />
        <Route exact path="/React_Exercices/easyResponsive" component={ EasyResponsive } />
        <Route exact path="/React_Exercices/webPage" component={ WebPage } />
        <Route exact path="/React_Exercices/corpSolutions" component={ CorpSolutions } />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
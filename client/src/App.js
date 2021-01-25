import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GlobalStyle from './GlobalStyle';
import { Background } from './components'
import { Home, Authentication } from './pages';

const App = () => {
    return (
        <>
        <GlobalStyle />
        <Background />
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/auth">
                    <Authentication />
                </Route>
            </Switch>
        </Router>
        </>
    )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GlobalStyle from './GlobalStyle';
import { Background } from './components'
import Home from './pages/Home';

const App = () => {
    return (
        <>
        <GlobalStyle />
        <Background />
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/">
                    <Authentication />
                </Route>
            </Switch>
        </Router>
        </>
    )
}

export default App

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/posts';

import GlobalStyle from './GlobalStyle';
import { Background } from './components'
import { Home, Authentication, Profile, OtherProfile } from './pages';

const App = () => {
    const [isSidebarActive, setIsSitebarActive] = useState(true);

    const dispatch = useDispatch();

    const toggleSitebar = () => {
        setIsSitebarActive(!isSidebarActive);
    }
    
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <>
        <GlobalStyle />
        <Background />
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} />
                </Route>
                <Route path="/profile">
                    <Profile isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} />
                </Route>
                <Route path="/auth" exact>
                    <Authentication />
                </Route>
                <Route path="/:id" exact>
                    <OtherProfile isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} />
                </Route> 
            </Switch>
        </Router>
        </>
    )
}

export default App

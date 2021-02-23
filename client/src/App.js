import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './redux/actions/posts';

import GlobalStyle from './GlobalStyle';
import { Background } from './components'
import { Home, Authentication, Profile } from './pages';

const App = () => {
    const userProfile = useSelector(state => state.auth.authData);
    const [isSidebarActive, setIsSitebarActive] = useState(true);

    const dispatch = useDispatch();

    const toggleSitebar = () => {
        setIsSitebarActive(!isSidebarActive);
    }
    
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, userProfile])

    return (
        <>
        <GlobalStyle />
        <Background />
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home userProfile={userProfile} isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} />
                </Route>
                <Route path="/:id" exact>
                    <Profile userProfile={userProfile} isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} />
                </Route> 
                <Route path="/profile">
                    <Profile userProfile={userProfile} isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} />
                </Route>
                <Route path="/auth" exact>
                    <Authentication />
                </Route>
            </Switch>
        </Router>
        </>
    )
}

export default App

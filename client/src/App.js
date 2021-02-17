import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/posts';

import GlobalStyle from './GlobalStyle';
import { Background } from './components'
import { Home, Authentication, Profile } from './pages';

const App = () => {
    const [userProfile, setUserProfile] = useState(JSON.parse(localStorage.getItem('profile')));
    const [isSidebarActive, setIsSitebarActive] = useState(true);

    const dispatch = useDispatch();

    const toggleSitebar = () => {
        setIsSitebarActive(!isSidebarActive);
    }

    const clearUserProfile = () => setUserProfile(null);
    
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
                    <Home userProfile={userProfile} isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} clearUserProfile={clearUserProfile} />
                </Route>
                <Route path="/profile">
                    <Profile userProfile={userProfile} isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} clearUserProfile={clearUserProfile} />
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

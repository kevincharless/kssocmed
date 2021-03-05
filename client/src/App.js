import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './redux/actions/auth';
import { getPosts } from './redux/actions/posts';

import GlobalStyle from './GlobalStyle';
import { Background } from './components'
import { Home, Authentication, Explore, Profile } from './pages';

const App = () => {
    const userProfile = useSelector(state => state.auth.authData);
    const users = useSelector(state => state.auth.users);
    const [isSidebarActive, setIsSitebarActive] = useState(true);
    
    const dispatch = useDispatch();

    const toggleSitebar = () => {
        setIsSitebarActive(!isSidebarActive);
    }
    
    useEffect(() => {
        dispatch(getPosts());
        dispatch(getUsers());
    }, [dispatch, userProfile])

    return (
        <>
        <GlobalStyle />
        <Background />
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home userProfile={userProfile} users={users} isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} />
                </Route>
                <Route path="/explore" exact>
                    <Explore userProfile={userProfile} users={users} isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} />
                </Route>
                <Route path="/profile" exact>
                    <Profile userProfile={userProfile} isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} />
                </Route>
                <Route path="/auth" exact>
                    <Authentication />
                </Route>
                <Route path="/:id" exact>
                    <Profile userProfile={userProfile} isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} />
                </Route> 
            </Switch>
        </Router>
        </>
    )
}

export default App

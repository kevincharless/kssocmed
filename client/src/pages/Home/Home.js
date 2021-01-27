import React, { useState } from 'react'
import { Sidebar, PageGrid, Posts } from '../../components';

const Home = () => {
    const [isSidebarActive, setIsSitebarActive] = useState(true);

    const toggleSitebar = () => {
        setIsSitebarActive(!isSidebarActive);
    }

    return (
        <div style={{ width: "100%", display: "flex" }}> 
            <Sidebar isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} />
            <PageGrid isSidebarActive={isSidebarActive} />
            {/* <Posts isSidebarActive={isSidebarActive} /> */}
        </div>
    )
}

export default Home

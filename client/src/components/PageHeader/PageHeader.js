import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Title, InputDiv, InputBackground, Input, InputIcon, SearchResult, SearchResultContent, UserImage, UserTag, UserInfo, UserName, UserBio } from './PageHeaders.elements';
import { FaSearch } from 'react-icons/fa';

const PageHeader = ({ title, users, isSidebarActive}) => {
    const [isActive, setIsActive] = useState(false);
    const [searchUser, setSearchUser] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        if (searchUser) {
            setIsActive(true);
            setSearchResult(
                users.filter(user => 
                    user.name.toUpperCase().includes(searchUser.toUpperCase())
                )
            )
        } else {
            setIsActive(false);
        }
    }, [searchUser, users])

    return (
        <Nav isSidebarActive={isSidebarActive}>
            <Title>
                {title}
            </Title>
            <InputDiv>
                <InputBackground>
                <Input type="search" value={searchUser} onChange={e => setSearchUser(e.target.value)} name="search" placeholder="Search Other..." autocomplete="chrome-off"  />
                    <InputIcon>
                        <FaSearch />
                    </InputIcon>
                </InputBackground>
                <SearchResult isMoreActive={isActive}>
                    {searchResult.map(user => 
                    <Link to={`/${user._id}`} style={{ textDecoration: 'none' }}>
                        <SearchResultContent searchUser={searchUser} key={user._id}>
                            {user?.imageUrl ? (
                                <UserImage src={user?.imageUrl} isSidebarActive={isSidebarActive} />
                            ) : (
                                <UserTag isSidebarActive={isSidebarActive}>{user?.name.split(' ').map(function(item){return item[0]}).join('')}</UserTag>
                            )}
                            <UserInfo>
                                <UserName>{user.name}</UserName>
                                <UserBio>{user.bio}</UserBio>
                            </UserInfo>
                        </SearchResultContent>
                    </Link>
                    )}

                    
                </SearchResult>
            </InputDiv>
            
        </Nav>
    )
}

export default PageHeader

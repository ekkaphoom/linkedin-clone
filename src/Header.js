import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './filebase';

export default function Header() {
    
    const dispatch = useDispatch();
    const onClickLogout=()=>{
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="./linkedin.svg" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption title="Home" Icon={HomeIcon} />
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
                <HeaderOption title="Messaging" Icon={ChatIcon}/>
                <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
                <HeaderOption onClick={onClickLogout}  title='My Profile' />
            </div>
        </div>
    )
}


import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css'

export default function HeaderOption({    
    Icon,
    title,
    onClick
}) {
    const user = useSelector(selectUser);
    return (
        <div className="headerOption" onClick={onClick}>
            {Icon && <Icon className="headerOption__icon" />}
            <Avatar className="headerOption__icon" src={user?.displayUrl} />
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

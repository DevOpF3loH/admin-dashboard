import React from 'react';
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">
              2
            </span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">
              2
            </span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="" className='topAvatar'/>
        </div>
      </div>
    </div>
  )
}

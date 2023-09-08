import React from "react";
import "./Sidebar.css";
import { LineStyle, Timeline, TrendingUp, Person, Inventory, Receipt, Mail, Feedback, Message, ManageAccounts, Analytics, Report } from "@mui/icons-material";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon"/>
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
            <li className="sidebarListItem active">
              <Person className="sidebarIcon"/>
              Users
            </li>
            </Link>
            <Link to="/products" className="link">
            <li className="sidebarListItem">
              <Inventory className="sidebarIcon"/>
              Products
            </li>
            </Link>
            
            <li className="sidebarListItem">
              <Receipt className="sidebarIcon"/>
              Transactions
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Mail className="sidebarIcon"/>
              Mail
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarIcon"/>
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message className="sidebarIcon"/>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Stuff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <ManageAccounts className="sidebarIcon"/>
              Manage
            </li>
            <li className="sidebarListItem">
              <Analytics className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon"/>
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

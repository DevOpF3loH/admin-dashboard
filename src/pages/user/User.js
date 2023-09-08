import React from 'react';
import "./User.css"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className='userTitle'>Edit User</h1>
        <Link to="/newuser">
        <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Peter Trend</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">
              Account Details
            </span>
            <div className="userShowInfo">
            <PermIdentity className='userShowIcon'/>
            <span className="userShowInfoTitle">@trend999</span>
            </div>
            <div className="userShowInfo">
            <CalendarToday className='userShowIcon'/>
            <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">
              Contact Details
            </span>
            <div className="userShowInfo">
            <PhoneAndroid className='userShowIcon'/>
            <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
            <MailOutline className='userShowIcon'/>
            <span className="userShowInfoTitle">trend999@gmail.com</span>
            </div>
            <div className="userShowInfo">
            <LocationSearching className='userShowIcon'/>
            <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className='userUpdateForm'>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder='@trend999' className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder='Peter Trend' className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder='trend999@gmail.com' className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder='+1 123 456 67' className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder='New York | USA' className='userUpdateInput'/>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className='userUpdateImg' src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                <label htmlFor="file"><Publish /></label>
                <input type="file" id="file" style={{display: "none"}}/>
              </div>
              <button className="userUpdateButto">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

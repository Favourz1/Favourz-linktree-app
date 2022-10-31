import React from 'react';
import userImg from '../assets/user.png';


export default function ProfileHeader(){
    return(
        <div className='profile-wrapper'>
            <img src={userImg} alt="User Annete Black" />
            <div> Annette Black </div>
        </div>
    )
}
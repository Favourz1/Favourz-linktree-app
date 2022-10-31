import React from 'react';
import userImg from '../assets/favour-okoh.jpg';
import shareIcon from '../assets/share-icon.svg';


export default function ProfileHeader(){
    return(
        <div className='profile-wrapper'>
            <img  className='user-icon' src={userImg} id='profile__img' alt="Favour Okoh" />
            <div className='user-name' id='slack'> Favour Okoh </div>
            <img className='share-icon' src={shareIcon} alt="Share Icon" />
        </div>
    )
}
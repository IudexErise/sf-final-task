import React from 'react';
import styles from './User.module.css';
import Registration from './Registration/Registration';
import Profile from './Profile/Profile';

export default function User() {

  let loggedIn = false;

  return (
    <div className={styles.container}>
      {loggedIn ? 
      <Profile  /> 
      : 
      <Registration  />}
    </div>
  )
}

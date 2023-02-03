import React from 'react';
import Limits from './Limits/Limits';
import UserName from './UserName/UserName';
import styles from './Profile.module.css';

export default function Profile({ loggedIn, setLoggedIn }) {
  return (
    <>
      <div className={styles.mobile}>
        <Limits />
      </div>
      <UserName loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </>
  )
}

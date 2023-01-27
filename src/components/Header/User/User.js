import React, { useState } from 'react';
import styles from './User.module.css';
import Registration from './Registration/Registration';
import Profile from './Profile/Profile';

export default function User() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className={styles.container}>
      {loggedIn ? <Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> : <Registration loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
    </div>
  )
}

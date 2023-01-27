import React from 'react';
import Limits from './Limits/Limits';
import UserName from './UserName/UserName';

export default function Profile({loggedIn, setLoggedIn}) {
  return (
        <>
          <Limits />
          <UserName loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </>
  )
}

import React from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Advertisements from '../Advertisements'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'
import { Suspense } from 'react'
import { User } from '@/generated/prisma'

const RightMenu = ({ user }: { user?: User}) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Advertisements size="md" />
    </div>
  );
};

export default RightMenu;
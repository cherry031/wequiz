'use client';

import UserCard from '../UserCard/UserCard';
import * as styles from './UserList.css';
import useWaitingStore from '@/app/_store/useWaitingStore';

const UserList = () => {
  const { userStatuses } = useWaitingStore();

  return (
    <div className={styles.mainContainer}>
      {userStatuses &&
        userStatuses.map(
          (user) =>
            user.userId && <UserCard key={user.userId} userStatus={user} />,
        )}
    </div>
  );
};

export default UserList;

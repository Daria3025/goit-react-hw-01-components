import { FriendListItem } from './FriendListItem';
import { FriendListUl } from './FriendList';


export const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnlineItem={isOnline}
          key={id}
        />
      ))}
    </FriendListUl>
  );
};
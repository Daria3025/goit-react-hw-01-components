import { FriendItemLi, FriendsOnline, FriendsName } from './FriendList';

export const FriendListItem = ({ avatar, name, isOnlineItem }) => {
    return (
      <FriendItemLi>
        <FriendsOnline $isOnline={isOnlineItem}></FriendsOnline>
        <img src={avatar} alt={name} width="48" />
        <FriendsName>{name}</FriendsName>
      </FriendItemLi>
    );
};
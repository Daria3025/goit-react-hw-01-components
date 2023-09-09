import { ProfileEl, ProfileDescr, ProfileAvatar, ProfileName, ProfileTag, ProfileLocation, ProfileStats, ProfileStatsLi } from './Profile.js';


export const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <ProfileEl>
      <ProfileDescr>
        <ProfileAvatar src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescr>

      <ProfileStats>
        <ProfileStatsLi>
          <span>Followers</span>
          <span >{stats.followers}</span>
        </ProfileStatsLi>
        <ProfileStatsLi>
          <span>Views</span>
          <span>{stats.views}</span>
        </ProfileStatsLi>
        <ProfileStatsLi>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </ProfileStatsLi>
      </ProfileStats>
    </ProfileEl>
  );
};

import PropTypes from 'prop-types';
// import css from './Profile.module.css';
import {
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileStatsLabel,
  ProfileStatsQuantity,
} from './Profile.styled';

export function Profile({
  userName,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileContainer>
      <ProfileInfo>
        <ProfileImage src={avatar} alt={userName} />
        <ProfileName>{userName}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileInfo>

      <ProfileStats>
        <ProfileStatsLabel>Followers: </ProfileStatsLabel>
        <ProfileStatsQuantity>{followers}</ProfileStatsQuantity>

        <ProfileStatsLabel>Views: </ProfileStatsLabel>
        <ProfileStatsQuantity>{views}</ProfileStatsQuantity>

        <ProfileStatsLabel>Likes: </ProfileStatsLabel>
        <ProfileStatsQuantity>{likes}</ProfileStatsQuantity>
      </ProfileStats>
    </ProfileContainer>
  );
}

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

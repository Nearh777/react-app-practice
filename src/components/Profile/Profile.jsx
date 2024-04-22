import PropTypes from 'prop-types';
// import css from './Profile.module.css';
// import {
//   ProfileContainer,
//   ProfileImage,
//   ProfileInfo,
//   ProfileName,
//   ProfileTag,
//   ProfileLocation,
//   ProfileStats,
//   ProfileStatsLabel,
//   ProfileStatsQuantity,
// } from './Profile.styled';

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
    // <ProfileContainer>
    //   <ProfileInfo>
    //     <ProfileImage src={avatar} alt={userName} />
    //     <ProfileName>{userName}</ProfileName>
    //     <ProfileTag>@{tag}</ProfileTag>
    //     <ProfileLocation>{location}</ProfileLocation>
    //   </ProfileInfo>

    //   <ProfileStats>
    //     <ProfileStatsLabel>Followers: </ProfileStatsLabel>
    //     <ProfileStatsQuantity>{followers}</ProfileStatsQuantity>

    //     <ProfileStatsLabel>Views: </ProfileStatsLabel>
    //     <ProfileStatsQuantity>{views}</ProfileStatsQuantity>

    //     <ProfileStatsLabel>Likes: </ProfileStatsLabel>
    //     <ProfileStatsQuantity>{likes}</ProfileStatsQuantity>
    //   </ProfileStats>
    // </ProfileContainer>

<div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt={userName}
      class="avatar"
    />
    <p className="name">{userName}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>


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

import React from "react";
import {
  ProfileHeaderContainer,
  UserContainer,
  User,
  UserAvatar,
  UserName,
  UserDescription,
  UserDescriptionEdit,
  UserActionsContainer,
  TimelineContainer,
  TimelineContainerLink,
  AboutContainer,
  AboutContainerLink,
  FriendsContainer,
  FriendsContainerLink,
  PhotosContainer,
  PhotosContainerLink,
  ChangePhotoContainer,
  ChangeBackgroundHeading,
  ChangeAvatarContainer
} from "./ProfileHeader.styles";
import ImageExample from "../../assets/images/photo-1419332552192-47d29e59b1e0.jpg";
import UserAvatarExample from "../../assets/images/36.jpg";
import CameraIcon from "../../assets/icons/_ionicons_svg_md-camera.svg";

const ProfileHeader = () => {
  return (
    <>
      <ProfileHeaderContainer coverImage={ImageExample}>
        <ChangePhotoContainer>
          <CameraIcon width="20" height="20" />
          <ChangeBackgroundHeading>Edit</ChangeBackgroundHeading>
        </ChangePhotoContainer>
      </ProfileHeaderContainer>
      <UserContainer>
        <User>
          <UserAvatar src={UserAvatarExample} />
          <ChangeAvatarContainer>
            <CameraIcon width="20" height="20" />
          </ChangeAvatarContainer>
        </User>
        <UserName>James Spiegel</UserName>
        <UserDescription>Short description about myself</UserDescription>
        <UserDescriptionEdit type="link">Edit</UserDescriptionEdit>
      </UserContainer>
      <UserActionsContainer>
        <TimelineContainer>
          <TimelineContainerLink type="link">Timeline</TimelineContainerLink>
        </TimelineContainer>
        <AboutContainer>
          <AboutContainerLink type="link">About</AboutContainerLink>
        </AboutContainer>
        <FriendsContainer>
          <FriendsContainerLink type="link">Friends</FriendsContainerLink>
        </FriendsContainer>
        <PhotosContainer>
          <PhotosContainerLink type="link">Photos</PhotosContainerLink>
        </PhotosContainer>
      </UserActionsContainer>
    </>
  );
};

export default ProfileHeader;
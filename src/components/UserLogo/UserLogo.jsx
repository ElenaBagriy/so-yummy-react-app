import { Avatar, StyledUserName, UserLogoWrapper } from './UserLogo.styled';

export function UserLogo() {
  return (
    <UserLogoWrapper>
      <Avatar />
      <StyledUserName>UserName</StyledUserName>
    </UserLogoWrapper>
  );
}

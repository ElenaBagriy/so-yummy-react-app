import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { UserLogoModal } from 'components/UserLogoModal/UserLogoModal';
import { selectUser } from 'redux/selectors';
import {
  StyledAvatar,
  StyledUserName,
  UserLogoWrapper,
} from './UserLogo.styled';

export function UserLogo() {
  const user = useSelector(selectUser);
  const userLogoRef = useRef();
  const [isOpen, setOpen] = useState(false);
  function popoverTogler() {
    setOpen(!isOpen);
  }
  return (
    <>
      <UserLogoWrapper ref={userLogoRef} onClick={popoverTogler}>
        <StyledAvatar alt={user.name} src={user.avatarURL} />
        <StyledUserName>{user.name}</StyledUserName>
      </UserLogoWrapper>
      <UserLogoModal
        userLogoRef={userLogoRef}
        popoverTogler={popoverTogler}
        isOpen={isOpen}
      />
    </>
  );
}

import { Grow, Popper } from '@mui/material';
import {
  EditProfileButton,
  LogoutButton,
  UserModalWrapper,
} from './UserLogoModal.styled';
import spriteSVG from 'images/svg/sprite.svg';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/user/userOperations';

export function UserLogoModal({ userLogoRef, popoverTogler, isOpen }) {
  const setOffset = [
    {
      name: 'offset',
      options: {
        offset: [0, 15],
      },
    },
  ];
  const dispatch = useDispatch();

  function EditProfileBtnHandle() {
    console.log('EDIT');
  }
  function logoutBtnHandle() {
    console.log('EXIT');
    dispatch(logoutUser());
  }
  return (
    <>
      <Popper
        id={'simple-popover'}
        open={isOpen}
        anchorEl={userLogoRef.current}
        onClose={popoverTogler}
        placement="bottom-end"
        transition
        modifiers={setOffset}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} timeout={400}>
            <UserModalWrapper>
              <EditProfileButton onClick={EditProfileBtnHandle}>
                Edit profile
              </EditProfileButton>
              <LogoutButton onClick={logoutBtnHandle}>
                Log out
                <svg width="18" height="19">
                  <use href={`${spriteSVG}#icon-arrow-right`} />
                </svg>
              </LogoutButton>
            </UserModalWrapper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

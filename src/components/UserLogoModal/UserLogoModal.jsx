import { Grow, Popper } from '@mui/material';
import {
  EditIcon,
  EditProfileButton,
  LogoutButton,
  UserModalWrapper,
} from './UserLogoModal.styled';
import spriteSVG from 'images/svg/sprite.svg';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/user/userOperations';
import { useState } from 'react';
import { EditProfileModal } from 'components/EditProfileModal/EditProfileModal';

export function UserLogoModal({ userLogoRef, popoverTogler, isOpen }) {
  const setOffset = [
    {
      name: 'offset',
      options: {
        offset: [0, 15],
      },
    },
  ];
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const handleOpenEditModal = () => setIsOpenEditModal(true);

  const handleCloseEditModal = () => {
    setIsOpenEditModal(false);
  };
  const dispatch = useDispatch();

  function EditProfileBtnHandle() {
    handleOpenEditModal();
    popoverTogler();
  };

  function logoutBtnHandle() {
    dispatch(logoutUser());
  };

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
                <EditIcon/>
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

      <EditProfileModal
        isOpenEditModal={isOpenEditModal}
        handleCloseEditModal={handleCloseEditModal}
      />
    </>
  );
}

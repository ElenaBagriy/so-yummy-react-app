import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@mui/material';
import { selectUserAvatar, selectUserName } from 'redux/selectors';
import sprite from 'images/svg/sprite.svg';
import {
  EditProfileCloseButton,
  EditProfileWrapper,
  EditSVG,
  IconClose,
  PlusSVG,
  SaveChangesBtn,
  SimpleDiv,
  StyledAvatar,
  StyledAvatarLabel,
  StyledBackdrop,
  StyledEditProfileForm,
  StyledFileInput,
  StyledNameInput,
  StyledNameLabel,
  UserSVG
} from './EditProfileModal.styled';
import { updateUser } from 'redux/user/userOperations';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export function EditProfileModal({ isOpenEditModal, handleCloseEditModal }) {
  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);
  const dispatch = useDispatch();

  const [isDisable, setIsDisable] = useState(false);
  const [newName, setNewName] = useState(userName);
  const [newAvatar, setNewAvatar] = useState('');
  const [fileAvatar, setNewFileAvatar] = useState('');
  
  const handleFileInputChange = e => {
    setNewAvatar(URL.createObjectURL(e.currentTarget.files[0]));
    setNewFileAvatar(e.currentTarget.files[0]);
  };

  const handleNameInputChange = e => {
    setNewName(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (isDisable) {
      return toast.warn('To save you need to make changes', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    const formData = new FormData();
    fileAvatar && formData.append('avatar', fileAvatar);
    newName ? formData.append('name', newName) : formData.append('name', userName);

     dispatch(updateUser(formData))
      .unwrap()
      .then(res => handleCloseEditModal())
      .catch(e => toast.error('Something went wrong. Please, try again later'));
  };

  useEffect(() => {
    if (newName === userName && !newAvatar) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [userName, newAvatar, newName, userAvatar]);

  return (
    <Modal className='modal'
      open={isOpenEditModal}
      onClose={() => handleCloseEditModal()}
      slots={{ backdrop: StyledBackdrop }}
    >
      <EditProfileWrapper className='modal'>
        <EditProfileCloseButton
          onClick={() => handleCloseEditModal()}>
          <IconClose />
        </EditProfileCloseButton>
        <StyledEditProfileForm onSubmit={handleFormSubmit}>
          <StyledAvatarLabel>
            <StyledAvatar
              alt={userName}
              src={newAvatar ? newAvatar : userAvatar}
            />
            <PlusSVG>
            </PlusSVG>
            <StyledFileInput
              name="image"
              type="file"
              accept={'image/jpeg,image/png,image/gif'}
              onChange={handleFileInputChange}
            />
          </StyledAvatarLabel>
          <SimpleDiv>
            <StyledNameLabel>
              <StyledNameInput
                type="text"
                name='name'
                value={newName ? newName : userName}
                onChange={handleNameInputChange}
              />
              <UserSVG>
                <use href={`${sprite}#icon-user`} />
              </UserSVG>
              <EditSVG>
                <use href={`${sprite}#icon-edit`} />
              </EditSVG>
            </StyledNameLabel>
            <SaveChangesBtn type="submit">Save changes</SaveChangesBtn>
          </SimpleDiv>
        </StyledEditProfileForm>
      </EditProfileWrapper>
    </Modal>
  );
};

EditProfileModal.propTypes = {
  isOpenEditModal: PropTypes.bool,
  handleCloseEditModal: PropTypes.func,
};

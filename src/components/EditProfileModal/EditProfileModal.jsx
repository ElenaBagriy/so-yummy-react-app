import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@mui/material';
import { selectUser } from 'redux/selectors';
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
  UserSVG,
} from './EditProfileModal.styled';

import { updateUser } from 'redux/user/userOperations';
import { toast } from 'react-toastify';

export function EditProfileModal({ isOpenEditModal, handleCloseEditModal }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState('');
  const [prevue, setPrevue] = useState('');
  const [name, setName] = useState(user.name);
  const [isDisable, setIsDisable] = useState(false);

  const handleFileInputChange = e => {
    setAvatar(e.target.files[0]);
    setPrevue(URL.createObjectURL(e.target.files[0]));
  };

  const handleNameInputChange = e => {
    setName(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (isDisable) {
      return toast.warn('🦄 To save you need to make changes', {
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
    if (name) {
      formData.append('name', name);
    }
    if (avatar) {
      formData.append('avatar', avatar);
    }
    dispatch(updateUser(formData));
  };

  useEffect(() => {
    if (name === user.name && !avatar) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [user.name, avatar, name]);

  useEffect(() => {
    if (isOpenEditModal) {
      setName(user.name);
    }
  }, [isOpenEditModal, user.name]);

  return (
    <>
      <Modal className='modal'
        open={isOpenEditModal}
        onClose={() => handleCloseEditModal(setPrevue, setName)}
        slots={{ backdrop: StyledBackdrop }}
      >
        <EditProfileWrapper className='modal'>
          <EditProfileCloseButton
            onClick={() => handleCloseEditModal(setPrevue, setName)}>
            <IconClose />
          </EditProfileCloseButton>
          <StyledEditProfileForm onSubmit={handleFormSubmit}>
            <StyledAvatarLabel>
              <StyledAvatar
                alt={user.name}
                src={prevue?.length > 0 ? prevue : user.avatarURL}
              />
              <PlusSVG>
              </PlusSVG>
              <StyledFileInput type="file" onChange={handleFileInputChange} />
            </StyledAvatarLabel>

            <SimpleDiv>
              <StyledNameLabel>
                <StyledNameInput
                  type="text"
                  value={name}
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
    </>
  );
}

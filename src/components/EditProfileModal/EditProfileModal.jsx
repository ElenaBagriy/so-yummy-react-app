import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@mui/material';
import { selectUser } from 'redux/selectors';
import sprite from 'images/svg/sprite.svg';
import {
  EditProfileWrapper,
  EditSVG,
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

import { refreshUser, updateUser } from 'redux/user/userOperations';

export function EditProfileModal({ isOpenEditModal, handleCloseEditModal }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(null);
  const [prevue, setPrevue] = useState(null);
  const [name, setName] = useState(user.name);

  const handleFileInputChange = e => {
    // setAvatar(URL.createObjectURL(e.target.files[0]));
    setAvatar(e.target.files[0]);
    // console.dir(e.target.files[0]);
    setPrevue(URL.createObjectURL(e.target.files[0]));
  };

  const handleNameInputChange = e => {
    setName(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    if (name) {
      formData.append('name', name);
    }
    if (avatar) {
      formData.append('avatar', avatar);
    }
    dispatch(updateUser(formData)).then(() => dispatch(refreshUser()));

    // console.log(formData);
  };

  return (
    <>
      <Modal
        open={isOpenEditModal}
        onClose={() => handleCloseEditModal(setPrevue, setName)}
        slots={{ backdrop: StyledBackdrop }}
      >
        <EditProfileWrapper>
          <StyledEditProfileForm onSubmit={handleFormSubmit}>
            <StyledAvatarLabel>
              <StyledAvatar
                alt={user.name}
                src={prevue?.length > 0 ? prevue : user.avatarURL}
              />
              <PlusSVG>
                <use href={`${sprite}#icon-plus`} />
              </PlusSVG>
              <StyledFileInput type="file" onChange={handleFileInputChange} />
            </StyledAvatarLabel>

            <SimpleDiv>
              <StyledNameLabel>
                <StyledNameInput
                  type="text"
                  value={name?.length >= 0 ? name : user.name}
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

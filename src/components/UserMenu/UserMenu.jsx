import React from 'react';
import { StyledHeadUser } from './UserMenu.styled';

import { StyledBtnDelete } from 'components/ContactList/ContactList.styled';
import { GrLogout } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { LogoutThunk } from 'redux/auth/operations';
const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(LogoutThunk());
  };
  return (
    <StyledHeadUser>
      <h3>{name}</h3>

      <StyledBtnDelete onClick={handleLogout}>
        <GrLogout />
      </StyledBtnDelete>
    </StyledHeadUser>
  );
};

export default UserMenu;

import {
  StyledBtn,
  StyledForm,
} from 'components/ContactForm/ContactForm.styled';
import { StyledLink } from 'components/Layout/Layout.styled';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/auth/operations';
import { StyledDesc, StyledTitle } from 'styles/App.Styled';

const RegisterForm = () => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .then(res => {
        alert(`Welcome, ${res.user.name}!`);

        navigate('/contacts');
      })
      .catch(() => alert('Data is not valid! Try again!'));
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <StyledTitle>New user registration</StyledTitle>
      <StyledDesc>Name</StyledDesc>
      <input
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
        {...register('name')}
      />
      <StyledDesc>E-mail</StyledDesc>
      <input
        type="email"
        name="email"
        placeholder="Email"
        minLength={3}
        required
        {...register('email')}
      />
      <StyledDesc>Password</StyledDesc>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        title="Enter 5-12 symbols"
        minLength={5}
        maxLength={12}
        required
        {...register('password')}
      />

      <StyledBtn type="submit">Sign Up</StyledBtn>
      <h4>
        Already registered? <StyledLink to="/login">Log in!</StyledLink>
      </h4>
    </StyledForm>
  );
};

export default RegisterForm;

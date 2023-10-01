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

const Register = () => {
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .then(() => {
        alert('Welcome!');
        // reset();
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
        // required
        placeholder="Name"
        // autoComplete="username"
        {...register('name')}
      />
      <StyledDesc>E-mail</StyledDesc>
      <input
        type="email"
        // as="input"
        name="email"
        placeholder="Email"
        minLength={3}
        // id="email"
        required
        // autoComplete="username"
        {...register('email')}
      />
      <StyledDesc>Password</StyledDesc>
      <input
        type="password"
        // as="input"
        name="password"
        placeholder="Enter 5-12 symbols"
        // minLength={5}
        // maxLength={12}
        // id="password"
        required
        // autoComplete="current-password"
        {...register('password')}
      />

      <StyledBtn type="submit">Sign Up</StyledBtn>
      <h4>
        Already registered? <StyledLink to="/login">Log in!</StyledLink>
      </h4>
    </StyledForm>
  );
};

export default Register;

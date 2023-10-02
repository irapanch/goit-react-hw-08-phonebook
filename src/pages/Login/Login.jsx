import {
  StyledBtn,
  StyledForm,
} from 'components/ContactForm/ContactForm.styled';
import { StyledLink } from 'components/Layout/Layout.styled';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginThunk } from 'redux/auth/operations';
import { StyledDesc, StyledTitle } from 'styles/App.Styled';

const Login = () => {
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = data => {
    dispatch(LoginThunk(data))
      .unwrap()
      .then(res => {
        alert(`Welcome, ${res.user.name}!`);
        // reset();
        navigate('/contacts');
      })
      .catch(() => alert('Data is not valid! Try again!'));
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <StyledTitle>Log In</StyledTitle>

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
        placeholder="Enter password"
        title="Enter 5-12 symbols"
        minLength={5}
        maxLength={12}
        // id="password"
        required
        // autoComplete="current-password"
        {...register('password')}
      />

      <StyledBtn type="submit">Log In</StyledBtn>
      <h4>
        Don't have an account?{' '}
        <StyledLink to="/register">Let's create it!</StyledLink>
      </h4>
    </StyledForm>
  );
};

export default Login;

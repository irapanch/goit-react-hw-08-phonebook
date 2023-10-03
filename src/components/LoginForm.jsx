import {
  StyledBtn,
  StyledForm,
} from 'components/ContactForm/ContactForm.styled';
import { StyledLink } from 'components/Layout/Layout.styled';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { StyledDesc, StyledTitle } from 'styles/App.Styled';

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const submit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        alert(`Welcome, ${res.user.name}!`);

        navigate(location.state?.from ?? '/');
      })
      .catch(() => alert('Data is not valid! Try again!'));
  };
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <StyledTitle>Log In</StyledTitle>

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

      <StyledBtn type="submit">Log In</StyledBtn>
      <h4>
        Don't have an account?{' '}
        <StyledLink to="/register">Let's create it!</StyledLink>
      </h4>
    </StyledForm>
  );
};

export default LoginForm;

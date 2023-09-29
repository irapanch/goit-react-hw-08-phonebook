import React from 'react';
import PropTypes from 'prop-types';
import { StyledDesc, StyledContact } from '../styles/App.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  return (
    <StyledContact>
      <StyledDesc>Find contacts by name</StyledDesc>
      <input
        type="text"
        name="search"
        onChange={e => dispatch(updateFilter(e.target.value))}
        value={filter}
        placeholder="Search by name"
      />
    </StyledContact>
  );
};
export default Filter;

Filter.propTypes = {
  takeData: PropTypes.func,
};

// export const Filter = ({ takeData }) => {
//   return (
// <StyledContact>
//   <StyledDesc>Find contacts by name</StyledDesc>
//   <input
//     type="text"
//     name="search"
//     onChange={takeData}
//     placeholder="Search by name"
//   />
// </StyledContact>
//   );
// };

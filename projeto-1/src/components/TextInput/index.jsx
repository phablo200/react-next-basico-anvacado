import './styles.css';
import React from 'react';
import P from 'prop-types';

export const TextInput = (props) => (
  <input
    type="search"
    className="text-input"
    onChange={props.onChange}
    value={props.searchValue}
    placeholder="Type your search"
  />
);

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  onChange: P.func.isRequired,
};

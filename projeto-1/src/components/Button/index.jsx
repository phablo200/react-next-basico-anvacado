import React from 'react';
import P from 'prop-types';
import './styles.css';

export const Button = (props) => (
  <button className="button" onClick={props.onClick} disabled={props.disabled}>
    {props.text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};

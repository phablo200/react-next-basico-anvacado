import P from 'prop-types';

export const Button = ({ text, onClick, disabled }) => {
    return (
        <button disabled={disabled} onClick={onClick}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: P.string.isRequired,
    onClick: P.func.isRequired,
    disabled: P.bool,
};

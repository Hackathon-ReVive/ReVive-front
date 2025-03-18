import PropTypes from "prop-types";

function Button({ type = "button", text, className, onClick }) {
  return (
    <button
      type={type}
      className={`w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

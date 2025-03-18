import PropTypes from "prop-types";

function Button({
  type = "button",
  text,
  className,
  onClick,
  bgColor = "bg-teal-500",
  txtColor = "text-white",
}) {
  return (
    <button
      type={type}
      className={`${bgColor} ${txtColor} p-2 rounded hover:bg-teal-600 hover:text-white cursor-pointer transition ${className}`}
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

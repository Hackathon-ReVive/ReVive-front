/**
 * Reusable Button Component.
 *
 * This button can be used throughout the application.
 * It supports different styles and functionalities based on the provided props.
 *
 * @module Button
 * @modified `KEY-282` LKASJILKSAJDLKA
 * @author {Ángel Aragón} {Kat Leverton}
 */

import PropTypes from "prop-types";

/**
 * Button component that provides a customizable and reusable button.
 *
 * @function Button
 * @param {Object} props - Component properties.
 * @param {string} props.type - Button type (submit, button, reset).
 * @param {string} props.text - Text displayed on the button.
 * @param {string} [props.className] - Additional CSS/Tailwind classes for customization.
 * @param {Function} [props.onClick] - Optional function executed on button click.
 * @returns {JSX.Element} The rendered button component.
 */
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

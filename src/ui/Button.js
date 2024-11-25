const Button = ({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  className = "",
}) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-green-500 hover:bg-red-500 text-white border-2 border-transparent",
    secondary:
      "bg-transparent border-2 border-green-500 text-green-500 hover:border-red-500 hover:text-red-500",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

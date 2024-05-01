/* eslint-disable react/prop-types */


const Button = ({
  children,
  className = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center text-center cursor-pointer`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export { Button };

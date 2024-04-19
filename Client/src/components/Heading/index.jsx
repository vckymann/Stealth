/* eslint-disable react/prop-types */
const sizes = {
  s: "text-4xl font-bold",
  md: "text-[56px] font-bold",
  xs: "text-2xl font-bold",
  lg: "text-[64px] font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

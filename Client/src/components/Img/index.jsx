/* eslint-disable react/prop-types */

const Img = ({ className, src = "defaultNoData.png", alt = "testImg", ...restProps }) => {
  return <img className={className} src={src} alt={alt} {...restProps} />;
};
export { Img };

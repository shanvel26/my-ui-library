import React from 'react';
import { ButtonProps } from './Button.types';
import './button.css';

const Button = ({
  label,
  variant,
  disabled,
  loading = false,
  loadingText,
  onClick,
  ...rest
}: ButtonProps) => {
  console.log('----variant----', variant);
  return (
    <button
      className={`button ${variant} ${disabled ? 'button--disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {label}

      {/* {loading ? <Spinner /> : label} */}
      {/* {!loading && icon && iconPosition === 'left' && <span>{icon}</span>} */}
      {/* {!loading ? label : loadingText} */}
      {/* {!loading && icon && iconPosition === 'right' && <span>{icon}</span>} */}
    </button>
  );
};

// const Button: React.FC<ButtonProps> = ({
//   label,
//   variant,
//   disabled,
//   onClick,
//   padding,
//   margin,
//   fontSize,
//   fontWeight,
//   fontFamily,
//   color,
//   backgroundColor,
//   borderRadius,
//   border,
//   width,
//   height,
//   display,
//   alignItems,
//   justifyContent,
//   boxShadow,
//   hoverBackgroundColor,
//   hoverColor,
//   focusOutline,
//   icon,
//   iconPosition = 'left',
//   ariaLabel,
//   loading = false,
//   loadingText = 'Loading...',
// }) => {
//   return (
//     <StyledButton
//       label={label}
//       variant={variant}
//       disabled={disabled}
//       onClick={onClick}
//       // padding={padding}
//       // margin={margin}
//       // fontSize={fontSize}
//       // fontWeight={fontWeight}
//       // fontFamily={fontFamily}
//       // color={color}
//       // backgroundColor={backgroundColor}
//       // borderRadius={borderRadius}
//       // border={border}
//       // width={width}
//       // height={height}
//       // display={display}
//       // alignItems={alignItems}
//       // justifyContent={justifyContent}
//       // boxShadow={boxShadow}
//       // hoverBackgroundColor={hoverBackgroundColor}
//       // hoverColor={hoverColor}
//       // focusOutline={focusOutline}
//       // iconPosition={iconPosition}
//       // aria-label={ariaLabel}
//       // loading={loading}
//     >
//       {loading && <Spinner />}
//       {!loading && icon && iconPosition === 'left' && <span>{icon}</span>}
//       {!loading ? label : loadingText}
//       {!loading && icon && iconPosition === 'right' && <span>{icon}</span>}
//     </StyledButton>
//   );
// };

export default Button;

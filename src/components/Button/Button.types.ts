export interface ButtonProps {
  label: string;
  variant?: string;
  disabled?: boolean;
  onClick: () => void;
  borderRadius?: string;
  // padding?: string;
  // margin?: string;
  // fontSize?: string;
  // fontWeight?: string;
  // fontFamily?: string;
  // color?: string;
  // backgroundColor?: string;
  // border?: string;
  // width?: string;
  // height?: string;
  // display?: string;
  // alignItems?: string;
  // justifyContent?: string;
  // boxShadow?: string;
  // hoverBackgroundColor?: string;
  // hoverColor?: string;
  // focusOutline?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
  loading?: boolean;
  loadingText?: string;
}

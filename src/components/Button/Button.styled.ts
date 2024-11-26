import styled from 'styled-components';
// import { ButtonProps } from './Button.types';

export const StyledButton = styled.button<any>`
  variant: ${(props) => props.variant || '10px 20px'};
  disabled: ${(props) => (props.disabled ? 'disabled' : 'initial')};
  padding: ${(props) => props.padding || '10px 20px'};
  margin: ${(props) => props.margin || '10px'};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
  font-family: ${(props) => props.fontFamily || 'inherit'};
  color: ${(props) => props.color || 'white'};
  
  border-radius: ${(props) => props.borderRadius || '4px'};
  border: ${(props) => props.border || 'none'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  display: ${(props) => props.display || 'flex'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  box-shadow: ${(props) => props.boxShadow || 'none'};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  pointer-events: ${(props) => (props.loading ? 'none' : 'auto')};

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || props.backgroundColor || '#0056b3'};
    color: ${(props) => props.hoverColor || props.color || 'white'};
  }

  &:focus {
    outline: ${(props) => props.focusOutline || 'none'};
  }

  span {
    ${(props) => (props.iconPosition === 'right' ? 'margin-left: 8px;' : 'margin-right: 8px;')}
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #ffffff;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
  position: absolute;
  left: calc(50% - 8px);
  top: calc(50% - 8px);

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

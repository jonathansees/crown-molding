import styled from 'styled-components';
import { backgroundColor } from './themes';
import { ChoiceItem } from '../Choice/index';

const Checkbox = styled(ChoiceItem)`
  --background-color: ${backgroundColor};

  span {
    input {
      margin: 0;
      height: 100%;
      width: 100%;
    
      ${(props) => (props.checked) && `
        &:after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 2px;
          content: '';
          visibility: hidden;
        }
      `}
    }

    span {
      border-radius: 2px;
    
      &:after {
        box-sizing: border-box;
        transform: rotate(45deg) scale(0);
        left: 4px;
        top: 1px;
        width: 5px;
        height: 8px;
        border: 2px solid #fff;
        transition: all .1s cubic-bezier(.71,-.46,.88,.6);
      }
    
      ${(props) => (props.checked) && `
        background-color: var(--background-color);
    
        &:after {
          transform: rotate(45deg) scale(1);
          position: absolute;
          left: 6px;
          top: 2.5px;
          display: table;
          width: 6px;
          height: 11px;
          border: 2px solid #fff;
          border-top: 0;
          border-left: 0;
          content: "";
          transition: all .2s cubic-bezier(.12,.4,.29,1.46);
        }
      `}
    }
  }
`;

export default Checkbox;

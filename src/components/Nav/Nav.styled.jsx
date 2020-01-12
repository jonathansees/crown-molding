import styled from 'styled-components';
import variables from '../../utils/variables';

const StyledNav = styled.div`
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) => props.height || variables.height};
  background-color: ${(props) => props.color || props.theme.primary || variables.primary};
`;

const StyledStickyNav = styled(StyledNav)`
  position: fixed;
  transition: all .6s;
  opacity: ${(props) => (props.show ? 1 : 0)};
  z-index: ${(props) => (props.show ? 100 : -1)};
`;

export {
  StyledNav,
  StyledStickyNav,
};

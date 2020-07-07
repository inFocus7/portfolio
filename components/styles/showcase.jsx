import styled from "styled-components";

export const SelectedContent = styled.p`
  font-weight: bold;
`;

export const UnselectedContent = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.shades.primary};
`;

export const Item = styled.button`
  margin: 0px 1.5rem 0px 0px !important;
  cursor: pointer;
`;

// TODO "If overflow, give hint that theres an overflow.."
export const HorizontalNavList = styled.nav`
  white-space: nowrap;
  overflow-x: auto;
  width: 90vw;

  button {
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
    background-color: transparent;

    :focus {
      border-color: ${(props) => props.theme.shades.primary};
    }
  }
`;

export const LinkButton = styled.div`
  min-height: 60px;
  display: flex;
  width: fit-content;
  border-radius: 5px;
  background: rgba(252, 252, 252, 0.05);
  border: 2px solid ${(props) => props.theme.text.primary};
  padding: 10px 8px 10px 10px;
  margin: 3px 10px 7px 0;
`;

export const LinkA = styled.a`
  font-size: inherit;
  color: ${(props) => props.theme.accent.secondary};
  opacity: 0.8;
  padding-right: 2px;
  font-weight: 900;
  transition: opacity 100ms ease-in-out;
  -moz-transition: opacity 100ms ease-in-out;
  -o-transition: opacity 100ms ease-in-out;
  -webkit-transition: opacity 100ms ease-in-out;

  :hover {
    color: ${(props) => props.theme.accent.secondary};
    opacity: 1;
  }

  :visited {
  }
`;

export default {
  SelectedContent,
  UnselectedContent,
  Item,
  HorizontalNavList,
  LinkButton,
  LinkA,
};

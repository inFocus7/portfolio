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

export const Line = styled.div`
  width: 100px;
  height: 3px;
  background-color: ${(props) => props.theme.text.primary};
  transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
`;

export const HorizontalNavList = styled.nav`
  button {
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
    background-color: transparent;

    :focus {
      border-color: ${(props) => props.theme.shades.primary};
    }

    /* TODO loop nth-child based on how many children in the nav... */
    /* TODO on selected move line & change width */

    :nth-child(1):hover ~ .line {
      transform: translate(0px);
      -moz-transform: translate(0px);
      -webkit-transform: translate(0px);
      -o-transform: translate(0px);
      -ms-transform: translate(0px);
      width: 120px;
      transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
    }

    :nth-child(2):hover ~ .line {
      transform: translate(220px);
      width: 120px;
      -moz-transform: translate(100px);
      -webkit-transform: translate(100px);
      -o-transform: translate(100px);
      -ms-transform: translate(100px);
      transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
    }

    :nth-child(3):hover ~ .line {
      transform: translate(320px);
      width: 120px;
      -moz-transform: translate(200px);
      -webkit-transform: translate(200px);
      -o-transform: translate(200px);
      -ms-transform: translate(200px);
      transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
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
  Line,
  HorizontalNavList,
  LinkButton,
  LinkA,
};

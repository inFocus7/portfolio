import styled from "styled-components";

export const HeaderWrapper = styled.div`
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    transform: translateY(0%);
    -moz-transform: translateY(0%);
    -webkit-transform: translateY(0%);
    -o-transform: translateY(0%);
    -ms-transform: translateY(0%);
    background-color: ${(props) => props.theme.background};
    height: 90px;
    transition: all 200ms ease-in-out;
    -moz-transition: all 200ms ease-in-out;
    -webkit-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
  }

  .header.hidden {
    transform: translateY(-110%);
    -moz-transform: translateY(-110%);
    -webkit-transform: translateY(-110%);
    -o-transform: translateY(-110%);
    -ms-transform: translateY(-110%);
    transition: all 200ms ease-in-out;
    -moz-transition: all 200ms ease-in-out;
    -webkit-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
  }

  .header.shadow {
    box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.5);
    transition: all 200ms ease-in-out;
    -webkit-transition: all 200ms ease-in-out;
    -moz-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    height: 65px;
  }
`;

export const LogoContainer = styled.div`
  display: table-cell;
  float: left;
  height: 100%;
  width: 43px;
  margin: auto 0px auto 15px;

  img {
    display: table-cell;
    margin: auto;
    height: 100%;

    :hover {
      cursor: pointer;
    }
  }
`;

export const Refs = styled.ul`
  height: 100%;
  float: right;

  a {
    display: table;
    height: 100%;
    float: left;

    li {
      display: table-cell;
      padding: 0px 17px;
      font-family: "Montserrat";
      margin: 0 auto;
      height: 100%;
      font-weight: 400;
      font-size: 2.3em;
      font-style: normal;
      vertical-align: middle;
      :hover {
        cursor: pointer;
      }
    }
  }
`;

export default { HeaderWrapper, LogoContainer, Refs };

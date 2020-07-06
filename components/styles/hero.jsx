import styled from "styled-components";

export const HeroView = styled.div`
  display: table;

  width: 100%;
  height: 100vh; /* 60px of header size! */
  padding: 0px;

  div {
    vertical-align: middle;
    display: table-cell;
  }
`;

export default { HeroView };

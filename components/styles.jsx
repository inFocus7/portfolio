import styled from "styled-components";

export const Center = styled.div`
  margin: 0px auto;
  display: flex !important;
  justify-content: center;

  @media (max-width: 670px) {
    justify-content: left;
  }
`;

export const HorizontalList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;

  li {
    display: inline-block;
    margin: 0px 6px;
  }
`;

export const View = styled.div`
  width: 100%;
  height: calc(100vh - 60px); /* 60px of header size! */
  padding: 0px;
  vertical-align: middle;
  display: table-cell;
`;
export const ListItem = styled.li`
  margin-bottom: 8px;
  margin-top: 10px;
`;

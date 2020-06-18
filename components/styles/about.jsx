import styled from "styled-components"

export const Content = styled.p`
  margin: 15px 0px;
`

export const Sub = styled.p`
  font-family: "Raleway";
  font-style: normal;
  font-weight: bold;
  font-size: 2em;
  line-height: 23px;
`

export const StackGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: start;
`

export default { Content, Sub, StackGrid }

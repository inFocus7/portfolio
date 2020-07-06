import styled from "styled-components";

export const NumStyle = styled.span`
  font-family: "Mitr";
  font-weight: 300;
  font-size: 0.85em;
  color: ${(props) => props.theme.accent.primary};
`;

export const SectionStyle = styled.span`
  font-weight: bold;
  font-size: 1.1em;
  background-color: ${(props) => props.theme.accent.primary};
  padding: 3px 5px;
  color: ${(props) => props.theme.background};
`;

export const Section = styled.div`
  margin: 15px 0px;
`;

export default { NumStyle, Section, SectionStyle };

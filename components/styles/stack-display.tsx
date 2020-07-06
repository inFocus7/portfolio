import styled from "styled-components";
import { BadgeType, StylizedBadgeType } from "../../interfaces/index";

export const Badge = styled.div`
  background: rgba(231, 218, 223, 0.05);
  display: flex;
  width: fit-content;
  /* Dark / Secondary Text */

  border: 1.5px solid ${(props: BadgeType) => props.theme.text.secondary};
  box-sizing: content-box;
  border-radius: 3px;
  overflow: hidden;
  height: 5em;
  align-items: center;
  vertical-align: middle;
  margin: 0.5em 1em 0.5em 0px;
  position: relative;

  :hover {
    cursor: default;
  }

  ::after {
    content: "";
    /* TODO Parallax background w/ bounds so it's always in view (therefore, small amt of parallax). */
    /* background-attachment: fixed; */
    background-image: url(${(props: BadgeType) => props.img});
    background-position: left;
    background-repeat: no-repeat;
    position: absolute;
    background-size: 60px 60px;
    opacity: 0.5;
    top: 0;
    left: -10px;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  p {
    font-weight: 600;
    font-size: 2.7em;
    color: ${(props: BadgeType) => props.theme.text.primary};
    float: right;
    text-align: center;
    vertical-align: middle;
    margin-left: 2.5em;
    padding-right: 0.35em;
  }
`;
export const StylizedBadge = styled.div`
  /* Skewed Version
  transform: matrix(0.71, 0.41, -1.22, 0.71, 0, 0);
  -moz-transform: matrix(0.71, 0.41, -1.22, 0.71, 0, 0);
  -o-transform: matrix(0.71, 0.41, -1.22, 0.71, 0, 0);
  -webkit-transform: matrix(0.71, 0.41, -1.22, 0.71, 0, 0);
  */

  background: rgba(231, 218, 223, 0.05);
  display: flex;
  width: fit-content;
  box-sizing: content-box;
  border-radius: 2px;
  overflow: hidden;
  height: 3.2em;
  align-items: center;
  vertical-align: middle;
  margin: 0.4em 0.8em 0.5em 0px;
  position: relative;
  background-color: ${(props: StylizedBadgeType) => props.background};

  :hover {
    cursor: default;
  }

  p {
    font-weight: 700;
    font-size: 2.3em;
    color: ${(props: StylizedBadgeType) => props.foreground};
    float: right;
    text-align: center;
    vertical-align: middle;
    padding-left: 0.3em;
    padding-right: 0.3em;
  }
`;

export default { Badge, StylizedBadge };

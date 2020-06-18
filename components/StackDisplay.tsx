import React, { FunctionComponent } from "react";
import ThemeContext from "../context/theme-context";
import { stackToImage } from "../functions/globalFunctions";
import Aos from "aos";
import styles from "./styles/stack-display";
import { StackGrid } from "./styles/about";
import { StackDisplayType, StylizedStackType } from "../interfaces/showcase";

// TODO "If not exists/found in stackToImage()..."

/**
 *
 *
 * @param {string} {name}
 * @param {isStylized} {boolean} ()
 * @returns
 */
const StackDisplay: FunctionComponent<StackDisplayType> = ({
  name,
  isStylized = false,
}) => {
  const theme: ThemeContext = React.useContext(ThemeContext);
  const { url, foreground, background } = stackToImage[name];
  const { Badge, StylizedBadge } = { ...styles };

  return isStylized ? (
    <StylizedBadge
      theme={theme}
      img={url}
      foreground={foreground}
      background={background}
    >
      <p>{name}</p>
    </StylizedBadge>
  ) : (
    <Badge theme={theme} img={url}>
      <p>{name}</p>
    </Badge>
  );
};

export default StackDisplay;

/**
 * StylizedStack
 * Creates a stylized stack (function component) based on a tech stack input.
 *
 * @param {StylizedStack} props
 * @returns {FunctionComponent}
 */
export const StylizedStack: FunctionComponent<StylizedStackType> = ({
  parent,
  stack,
}) => {
  React.useEffect(() => {
    Aos.init({ duration: 750 });
    // return () => {
    //   cleanup
    // }
  }, []);

  stack.sort();

  return (
    <div>
      <StackGrid>
        {stack.map((s, i) => {
          return (
            <div
              data-aos="fade-left"
              data-aos-delay={i * 100}
              key={`${parent}-stack-${s}`}
            >
              <StackDisplay name={s} isStylized={true} />
            </div>
          );
        })}
      </StackGrid>
    </div>
  );
};

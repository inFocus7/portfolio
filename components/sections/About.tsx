import React, { FunctionComponent } from "react";
import SectionHeader from "../SectionHeader";
import StackDisplay from "../StackDisplay";
import Aos from "aos";
import { View } from "../styles";
import styles from "../styles/about";
import { AboutProps } from "../../interfaces/about";
import { DataContext } from "../../context/data-context";

/**
 * The About section in the index page.
 *
 * @returns {FunctionComponent}
 */
const About: FunctionComponent<AboutProps> = ({}) => {
  const { Content, Sub, StackGrid } = { ...styles };
  const about = React.useContext(DataContext).data?.about;

  React.useEffect(() => {
    Aos.init({ duration: 750 });

    // return () => {
    //   cleanup
    // }
  }, []);

  if (about) {
    return (
      <section id="about">
        <View data-aos="fade">
          <SectionHeader num={0} title="About Me" />
          <div data-aos="fade">
            {about.content.map((val, i) => {
              return <Content key={`about-${i + 1}`}>{val}</Content>;
            })}
          </div>
          <Sub data-aos="fade-up">Current Stack</Sub>
          <StackGrid>
            {about.stack.map((val, i) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  key={`about-stack-${val}`}
                >
                  <StackDisplay name={val} />
                </div>
              );
            })}
          </StackGrid>
        </View>
      </section>
    );
  }

  return <></>;
};

export default About;

import React, { FunctionComponent } from "react";
import SectionHeader from "../SectionHeader";
import StackDisplay from "../StackDisplay";
import Aos from "aos";
import { View } from "../styles";
import styles from "../styles/about";
import { AboutProps, AboutData } from "../../interfaces/about";
import {DataContext} from "../../context/data-context";

/**
 * The About section in the index page.
 *
 * @returns {FunctionComponent}
 */
const About: FunctionComponent<AboutProps> = ({}) => {
  const { Content, Sub, StackGrid } = { ...styles };
  const {about} = React.useContext(DataContext).data;

  React.useEffect(() => {
    Aos.init({ duration: 750 });

    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <section id="about">
      <View data-aos="fade">
        <SectionHeader num={0} title="About Me" />
        {about.content.map((val, i) => {
          return (
            <Content data-aos="fade-up" key={`about-${i + 1}`}>
              {val}
            </Content>
          );
        })}
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
};

export default About;

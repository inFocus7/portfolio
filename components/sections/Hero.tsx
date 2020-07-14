import React, { FunctionComponent } from "react";
import ThemeContext from "../../context/theme-context";
import { companyToImage } from "../../functions/globalFunctions";
import Aos from "aos";
import Typical from "react-typical";
import { Center, HorizontalList } from "../styles";
import styles from "../styles/hero";
import { HeroProps } from "../../interfaces/hero";
import { DataContext } from "../../context/data-context";

const Hero: FunctionComponent<HeroProps> = ({}) => {
  const { HeroView } = { ...styles };
  const theme: ThemeContext = React.useContext(ThemeContext);
  const main = React.useContext(DataContext).data?.main;

  React.useEffect(() => {
    Aos.init({ duration: 1000 });
    // return () => {
    //   cleanup
    // }
  }, []);

  if (main) {
    let titleSteps: any[] = main.titles;
    for (let i = 0; i < main.titles.length; i += 2) {
      if (typeof titleSteps[i] == "string")
        titleSteps[i] = titleSteps[i].slice(
          0,
          titleSteps[i].length - " Engineer".length
        );

      titleSteps.splice(i + 1, 0, 2000);
    }

    return (
      <section id="hero">
        <HeroView data-aos="fade" data-aos-duration="5000">
          <div>
            <Center id="hi-me">
              <span>
                <p
                  data-aos="fade-right"
                  style={{ color: theme.accent.primary }}
                >
                  Hi! I'm
                </p>
                <h1 data-aos="fade-left">{main.name}</h1>
              </span>
            </Center>
            <Center>
              <h2>{main.subtitle}</h2>
            </Center>
            <Center>
              <Typical steps={titleSteps} loop={Infinity} wrapper="h2" />
              <h2> Engineer</h2>
            </Center>
            <Center>
              <HorizontalList data-aos="fade-up">
                {main.contacts &&
                  main.contacts.map((val) => {
                    // Woah. Optional chaining '?.' is pretty awesome!
                    const SvgComponent = companyToImage[val.name]?.[1];

                    return (
                      <li key={val.name}>
                        <a
                          href={val.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {SvgComponent ? (
                            <SvgComponent
                              fill={theme.text.secondary}
                              width="25px"
                              height="55px"
                            />
                          ) : (
                            <h4
                              style={{ fontSize: "1.6em" }}
                            >{`<${val.name}>`}</h4>
                          )}
                        </a>
                      </li>
                    );
                  })}
              </HorizontalList>
            </Center>
          </div>
        </HeroView>
      </section>
    );
  }

  // TODO: Make custom missing data.
  return <></>
};

export default Hero;

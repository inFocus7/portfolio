import React, { FunctionComponent } from "react";
import ThemeContext from "../../context/theme-context";
import { companyToImage } from "../../functions/globalFunctions";
import Aos from "aos";
import Typical from "react-typical";
import { Center, HorizontalList } from "../styles";
import styles from "../styles/hero";
import {HeroData, HeroProps} from "../../interfaces/hero"
import gql from 'graphql-tag'
import {useQuery} from "@apollo/react-hooks"

const GET_MAIN = gql`
{
  main {
    name
    subtitle
    titles
    contacts {
      name
      link
    }
  }
}
`;

const Hero: FunctionComponent<HeroProps> = ({}) => {
  const { HeroView } = { ...styles };
  // let info: HeroData = React.useContext(DataContext).main[0];
  const theme: ThemeContext = React.useContext(ThemeContext);
    const {loading, error, data} = useQuery(GET_MAIN);

  React.useEffect(() => {
    Aos.init({ duration: 1000 });
    // return () => {
    //   cleanup
    // }
  }, []);

  if (loading) return <h2>Loading Main Information...</h2>;
  if (error) return <h2>{`Error! ${error.message}`}</h2>;

  const info: HeroData = data.main;

  let titleSteps: any[] = info.titles;
  for (let i = 0; i < info.titles.length; i += 2) {
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
              <p data-aos="fade-right" style={{ color: theme.accent.primary }}>
                Hi! I'm
              </p>
              <h1 data-aos="fade-left">{info.name}</h1>
            </span>
          </Center>
          <Center>
            <h2>{info.subtitle}</h2>
          </Center>
          <Center>
            <Typical steps={titleSteps} loop={Infinity} wrapper="h2" />
            <h2> Engineer</h2>
          </Center>
          <Center>
            <HorizontalList data-aos="fade-up">
              {info.contacts && info.contacts.map((val) => {
              const SvgComponent = companyToImage[val.name][1];

                return (
                  <li key={val.name}>
                    <a
                      href={val.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SvgComponent
                        fill={theme.text.secondary}
                        width="25px"
                        height="55px"
                      />
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
};

export default Hero;

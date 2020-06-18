import React, { FunctionComponent } from "react";
import ThemeContext from "../context/theme-context";
import { ListItem } from "./styles";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./styles/showcase";
import { StylizedStack } from "./StackDisplay";
import Aos from "aos";
import { StackGrid } from "./styles/about";
import { stackToImage } from "../functions/globalFunctions";
import { Sub } from "./styles/about";
import {
  ShowcaseWorkType,
  ShowcaseProjectsType,
  NavType,
  LinkBType,
} from "../interfaces/showcase";
import {objectImgType} from "../interfaces/index"

// TODO DRY it up!
// TODO Finish <Line/> to move & transform based on location & width of of content abover/hovering.
// TODO Allow for multiple positions in single company!
// TODO Transition between switches instead of just replacing!
// TODO "If clicked index > curr index (slideCurrNewLeft) else (slideCurrNewRight)"

/**
 * Creates a Link Button's component.
 *
 * @param {Object} {data} (Depends on type of link/ref...)
 * @param {string} {title}
 * @returns
 */
const LinkB: FunctionComponent<LinkBType> = ({ data, title }) => {
  const { LinkButton, LinkA } = { ...styles };
  const theme: ThemeContext = React.useContext(ThemeContext);

  const titleToType: Function = (title: string): string => {
    const spaceIndex = title.indexOf(" ");

    return spaceIndex == -1 ? title : title.substr(0, spaceIndex);
  };

  const icon: objectImgType = stackToImage[titleToType(title)];

  var dataArr: JSX.Element[] = [];
  // TODO Look into what '__typename' represents (fetched data from apollo/graphql)
  for (var k in data)
    if (data[k] && k != "__typename")
      dataArr.push(
        <LinkA href={data[k]} target="_blank" rel="noopener" theme={theme}>
          | {k}
        </LinkA>
      );

  return (
    <div>
      <LinkButton theme={theme}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <icon.icon fill={theme.text.secondary} width="35px" height="35px" />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "5px" }}
        >
          <p style={{ display: "inline" }}>{title}</p>
        </div>
        {/* TODO Add links vertically with typenames */}
        <ul
          style={{
            marginBottom: "0",
            marginLeft: "7px",
            display: dataArr.length == 1 ? "inline-flex" : "inline",
            alignItems: "center",
          }}
        >
          {dataArr.map((V,i) => {
            return (
              <div key={`${title}-link-${i}`}>
                <p>{V}</p>
              </div>
            );
          })}
        </ul>
      </LinkButton>
    </div>
  );
};

/**
 * Component for horizontal content navigation.
 *
 * @param {currIndex}     {number}        (Currently viewed content index)
 * @param {sectionTitles} {string[]}      (List of sections)
 * @param {setIndex}      {Function}      (Callback function to set viewed index)
 * @param {theme}         {ThemeContext}
 * @returns {FunctionComponent}
 * @author {Fabian Gonzalez}
 */
const Nav: FunctionComponent<NavType> = ({
  currIndex,
  sectionTitles,
  setIndex,
  theme,
}) => {
  const {
    HorizontalNavList,
    Item,
    Line,
    SelectedContent,
    UnselectedContent,
  } = { ...styles };

  React.useEffect(() => {
    Aos.init({ duration: 500 });
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div data-aos="fade">
      <HorizontalNavList theme={theme}>
        {sectionTitles.map((title, i) => {
          const Style = i == currIndex ? SelectedContent : UnselectedContent;

          return (
            <Item onClick={() => setIndex(i)} key={`nav-${title}`}>
              <Style theme={theme}>{title}</Style>
            </Item>
          );
        })}

        {/* <Line className="line" theme={theme}></Line> */}
      </HorizontalNavList>
    </div>
  );
};

/**
 * Work showcase section.
 *
 * @param {Work[]} {info} (Array of all works)
 * @returns {FunctionComponent}
 * @author {Fabian Gonzalez}
 */
const ShowcaseWork: FunctionComponent<ShowcaseWorkType> = ({ info }) => {
  const [index, setIndex] = React.useState(0);
  const theme: ThemeContext = React.useContext(ThemeContext);

  React.useEffect(() => {
    Aos.init({ duration: 500 });
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div data-aos="fade" style={{ height: "600px" }}>
      <Nav
        currIndex={index}
        sectionTitles={info.map((work) => work.company)}
        setIndex={setIndex}
        theme={theme}
      />

      {/* Grid based on width. right/bottom will be tech stack display! */}
      <div>
        <div style={{ margin: "6px 0px 4px 0px" }}>
          <h4>
            {info[index].position} @{" "}
            <span
              style={{
                color: theme.accent.primary,
                fontSize: "inherit",
                fontWeight: "bold",
              }}
            >
              {info[index].company}
            </span>
          </h4>
        </div>
        <StylizedStack stack={info[index].stack} parent={info[index].company} />
        <div>
          <FaMapMarkerAlt color={theme.accent.secondary} size="2em" />
          <p
            style={{
              color: theme.shades.primary,
              fontWeight: 600,
              display: "inline-block",
              marginLeft: "3px",
            }}
          >
            {info[index].location}
          </p>
        </div>
        <p style={{ color: theme.shades.primary }}>{info[index].description}</p>
        <ul
          style={{
            marginLeft: "0",
            marginBottom: "0",
            listStyleType: "none",
          }}
        >
          {info[index].points.map((point, i) => (
            <div
              style={{
                borderLeft: `.35em solid ${theme.accent.secondary}`,
                paddingLeft: ".7em",
              }}
              key={`project-${info[index].company}-point-${i + 1}`}
            >
              <ListItem>
                <p>{point}</p>
              </ListItem>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

/**
 * Project showcase section.
 *
 * @param {Project[]} {info} (Array of all projects)
 * @returns {FunctionComponent}
 * @author {Fabian Gonzalez}
 */
const ShowcaseProjects: FunctionComponent<ShowcaseProjectsType> = ({
  info,
}) => {
  const [index, setIndex] = React.useState(0);
  const theme: ThemeContext = React.useContext(ThemeContext);
  const projectRoleConcat = (roles: String[]): String => {
    switch (roles.length) {
      case 0:
        return "";
      case 1:
        return roles[0];
      default:
        return roles.reduce((prev, curr) => `${prev}, ${curr}`);
    }
  };

  React.useEffect(() => {
    Aos.init({ duration: 500 });
    // return () => {
    //   cleanup
    // }
  }, []);

  const { github, notion, website, figma } = { ...info[index].links };

  return (
    <div data-aos="fade" style={{ height: "600px" }}>
      <Nav
        currIndex={index}
        sectionTitles={info.map((project) => project.name)}
        setIndex={setIndex}
        theme={theme}
      />

      <div data-aos="fade">
        <div style={{ margin: "6px 0px 4px 0px" }}>
          <h4 style={{ fontSize: "4.5em" }}>{info[index].name}</h4>

          <p
            style={{
              color: theme.shades.primary,
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            {info[index].description}
          </p>
        </div>

        <StylizedStack stack={info[index].stack} parent={info[index].name} />

        <h6>{projectRoleConcat(info[index].role)}</h6>

        <ul
          style={{
            marginLeft: "0",
            marginBottom: "0",
            listStyleType: "none",
          }}
        >
          {info[index].content.map((point, i) => (
            <div
              style={{
                borderLeft: `.35em solid ${theme.accent.secondary}`,
                paddingLeft: ".7em",
              }}
              key={`project-${info[index].name}-point-${i + 1}`}
            >
              <ListItem>
                <p>{point}</p>
              </ListItem>
            </div>
          ))}
        </ul>

        <Sub>Links</Sub>
        <StackGrid>
          {github && (
            <div>
              <LinkB data={github} title="GitHub Repos" />
            </div>
          )}
          {website && (
            <div>
              <LinkB data={website} title="Website" />
            </div>
          )}
          {figma && (
            <div>
              <LinkB data={figma} title="Figma Designs" />
            </div>
          )}
          {notion && (
            <div>
              <LinkB data={notion} title="Notion Workboard" />
            </div>
          )}
        </StackGrid>
      </div>
    </div>
  );
};

export {ShowcaseProjects, ShowcaseWork};
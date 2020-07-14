import React, { FunctionComponent } from "react";
import SectionHeader from "../SectionHeader";
import { ShowcaseProjects } from "../Showcase";
import { View } from "../styles";
import { ProjectProps } from "../../interfaces/project";
import { DataContext } from "../../context/data-context";

const Projects: FunctionComponent<ProjectProps> = ({}) => {
  const projects = React.useContext(DataContext).data?.projects;

  if (projects) {
    return (
      <section id="projects" style={{ tableLayout: "fixed" }}>
        <View>
          <SectionHeader num={2} title="Projects" />
          <ShowcaseProjects info={projects} />
        </View>
      </section>
    );
  }

  return <></>;
};

export default Projects;

import React, { FunctionComponent } from "react";
import SectionHeader from "../SectionHeader";
import { ShowcaseProjects } from "../Showcase";
import { View } from "../styles";
import { ProjectData, ProjectProps } from "../../interfaces/project";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_PROJECTS = gql`
  {
    projects {
      name
      description
      role
      content
      links {
        figma {
          web
          mobile
          desktop
        }
        notion {
          workboard
        }
        github {
          backend
          frontend
        }
        website {
          link
        }
      }
      stack
      date {
        start
        end
      }
      progress
      place
      isMajor
    }
  }
`;

const Projects: FunctionComponent<ProjectProps> = ({}) => {
  const { data, loading, error } = useQuery(GET_PROJECTS);

  if (loading) return <h2>Loading Projects...</h2>;
  if (error) return <h2>{`Error! ${error.message}`}</h2>;

  const info: ProjectData[] = data.projects;
  return (
    <section id="projects">
      <View>
        <SectionHeader num={2} title="Projects" />
        <ShowcaseProjects info={info} />
      </View>
    </section>
  );
};

export default Projects;

import React, { FunctionComponent } from "react";
import SectionHeader from "../SectionHeader";
import { ShowcaseWork } from "../Showcase";
import { View } from "../styles";
import { WorkData } from "../../interfaces/work";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_WORK = gql`
  {
    work {
      company
      position
      location
      description
      points
      date {
        start
        end
      }
      stack
    }
  }
`;
const Work: FunctionComponent = (props) => {
  const { loading, error, data } = useQuery(GET_WORK);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const info = data.work;
  return (
    <section id="work">
      <View>
        <SectionHeader num={1} title="Work Experience" />
        <ShowcaseWork info={info} />
      </View>
    </section>
  );
};

export default Work;

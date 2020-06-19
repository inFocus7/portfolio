import React, { FunctionComponent } from "react";
import SectionHeader from "../SectionHeader";
import { ShowcaseWork } from "../Showcase";
import { View } from "../styles";
import { WorkData, WorkProps } from "../../interfaces/work";
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
const Work: FunctionComponent<WorkProps> = ({}) => {
  const { loading, error, data } = useQuery(GET_WORK);

  if (loading) return <h2>Loading Work Experience...</h2>;
  if (error) return <h2>{`Error! ${error.message}`}</h2>;

  const info: WorkData[] = data.work;
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

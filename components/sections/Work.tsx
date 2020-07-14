import React, { FunctionComponent } from "react";
import SectionHeader from "../SectionHeader";
import { ShowcaseWork } from "../Showcase";
import { View } from "../styles";
import { WorkProps } from "../../interfaces/work";
import { DataContext } from "../../context/data-context";

const Work: FunctionComponent<WorkProps> = ({}) => {
  const work = React.useContext(DataContext).data?.work;

  if (work) {
    return (
      <section id="work">
        <View>
          <SectionHeader num={1} title="Work Experience" />
          <ShowcaseWork info={work} />
        </View>
      </section>
    );
  }

  return <></>;
};

export default Work;

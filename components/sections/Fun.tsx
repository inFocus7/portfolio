import React, { FunctionComponent } from "react";
import SectionHeader from "../SectionHeader";
import Aos from "aos";
import { emojiMatcher } from "../../functions/globalFunctions";
import { View, ListItem } from "../styles";
import styles from "../styles/fun";
import { FunProps } from "../../interfaces/fun";
import { DataContext } from "../../context/data-context";

const Fun: FunctionComponent<FunProps> = ({}) => {
  const { facts } = React.useContext(DataContext).data;
  const { List } = { ...styles };

  React.useEffect(() => {
    Aos.init({ duration: 750 });
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <section id="fun">
      <View>
        <SectionHeader num={3} title="Fun Facts" />
        <List data-aos="fade-up">
          {facts.map((fact, i) => {
            let emoji = emojiMatcher[fact.category];
            if (!emoji) emoji = "";
            return (
              <ListItem key={`funfact-${i + 1}`}>
                <p>{`${emoji} ${fact.content} ${emoji}`}</p>
              </ListItem>
            );
          })}
        </List>
      </View>
    </section>
  );
};

export default Fun;

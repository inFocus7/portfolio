import React, { FunctionComponent } from "react";
import SectionHeader from "../SectionHeader";
import Aos from "aos";
import { emojiMatcher } from "../../functions/globalFunctions";
import { View, ListItem } from "../styles";
import styles from "../styles/fun";
import { FunData, FunProps } from "../../interfaces/fun";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_FUN = gql`
  {
    facts {
      category
      content
      link
    }
  }
`;
const Fun: FunctionComponent<FunProps> = ({}) => {
  const { loading, error, data } = useQuery(GET_FUN);
  const { List } = { ...styles };
  //   var data: FunData[] = React.useContext(DataContext).facts;

  React.useEffect(() => {
    Aos.init({ duration: 750 });
    // return () => {
    //   cleanup
    // }
  }, []);

  if (loading) return <h2>Loading Fun Facts...</h2>;
  if (error) return <h2>{`Error! ${error.message}`}</h2>;

  const info: FunData[] = data.facts;

  return (
    <section id="fun">
      <View>
        <SectionHeader num={3} title="Fun Facts" />
        <List>
          {info.map((fact, i) => {
            let emoji = emojiMatcher[fact.category];
            if (!emoji) emoji = "";
            return (
              <ListItem key={`funfact-${i + 1}`} data-aos="fade-up">
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

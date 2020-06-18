import React, {FunctionComponent} from "react"
import SectionHeader from "../SectionHeader";
import StackDisplay from "../StackDisplay"
import Aos from "aos";
import {View} from "../styles";
import styles from "../styles/about"
import gql from 'graphql-tag'
import {useQuery} from "@apollo/react-hooks"

const GET_ABOUT = gql`
{
    about {
        content
        stack
    }
}
`;

/**
 * The About section of index page.
 *
 * @returns {FunctionComponent}
 */
const About: FunctionComponent = () => {
    //let info: AboutData = React.useContext(DataContext).about[0];
    const {Content, Sub, StackGrid}  = {...styles}
    const {loading, error, data} = useQuery(GET_ABOUT);

    React.useEffect(() => {
        Aos.init({duration: 750});

        // return () => {
        //   cleanup
        // }
    }, [])

    if(loading) return 'Loading...';
    if(error) return `Error! ${error.message}`;

    const info = data.about;
    return (
        <section id="about">
            <View data-aos="fade">
                <SectionHeader num={0} title='About Me'/>
                {info.content.map((val,i) => {
                    return (
                        <Content data-aos="fade-up" key={`about-${i+1}`}>{val}</Content>
                    )
                })}
                <Sub data-aos="fade-up">Current Stack</Sub>
                <StackGrid>
                    {info.stack.map((val, i) => {
                        return (
                            <div data-aos="fade-up" data-aos-delay={i*100} key={`about-stack-${val}`}>
                                <StackDisplay name={val}/>
                            </div>
                        )
                })}
                </StackGrid>
            </View>
        </section>
    )
}

export default About;
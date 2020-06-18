import React, { FunctionComponent } from "react"
import styles from "./styles/section-header"
import ThemeContext from "../context/theme-context"
import Aos from "aos"
import {SectionHeaderType} from "../interfaces/index"

/**
 * Section headers.
 * ex. [0]. About Me
 *
 * @param {number} {num}        (Section number)
 * @param {string} {title}      (Section name)
 * @returns {FunctionComponent}
 * @author {Fabian Gonzalez}
 */
const SectionHeader: FunctionComponent<SectionHeaderType> = ({ num, title }) => {
  const theme: ThemeContext = React.useContext(ThemeContext)
  const { Section, NumStyle, SectionStyle } = { ...styles }

  React.useEffect(() => {
    Aos.init({ duration: 500 })
    // return () => {
    //   cleanup
    // }
  }, [])

  return (
    <Section data-aos="fade-right">
      <p>
        <NumStyle theme={theme}>[{num}]</NumStyle>{" "}
        <SectionStyle theme={theme}>{title}</SectionStyle>
      </p>
    </Section>
  )
}

export default SectionHeader

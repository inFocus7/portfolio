import React, { FunctionComponent } from "react";
import { LoadingData } from "../../interfaces/loading";
import { Center } from "../styles";
import { motion } from "framer-motion";
import ThemeContext from "../../context/theme-context";

const Loading: FunctionComponent<LoadingData> = ({}) => {
  const theme: ThemeContext = React.useContext(ThemeContext);

  const iconBackground = {
    hidden: {
      pathLength: 0,
      stroke: "rgb(237, 66, 83)",
      strokeWidth: 0,
      fill: "rgb(237, 66, 83, 0)",
    },
    visible: {
      pathLength: 1,
      stroke: "rgb(237, 66, 83)",
      fill: "rgb(237, 66, 83, 1)",
      strokeWidth: 1,
    },
  };

  const iconForeground = {
    hidden: {
      fill: theme.background,
      fillOpacity: 0,
      stroke: theme.background,
      strokeWidth: 0,
      pathLength: 0,
    },
    visible: {
      fill: theme.background,
      fillOpacity: 1,
      stroke: theme.background,
      strokeWidth: 1,
      pathLength: 1,
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "grid",
        alignContent: "center",
      }}
    >
      <Center>
        <motion.div
          animate={{ scale: [0, 1.06, 1] }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 5, 0, -5, 0] }}
            transition={{ duration: 1.5, loop: Infinity }}
          >
            <motion.svg
              width="max(10vw,100px)"
              viewBox="0 0 47 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M23.5 2.5C35.098 2.5 44.5 11.902 44.5 23.5C44.5 35.098 35.098 44.5 23.5 44.5C11.902 44.5 2.5 35.098 2.5 23.5C2.5 11.902 11.902 2.5 23.5 2.5Z"
                variants={iconBackground}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 1, ease: "easeInOut" },
                  fill: { duration: 1, ease: [1, 0, 0.8, 1] },
                }}
              />
              {/* TODO Look into if changing path manally (V42 -> V64) messes with anything... */}
              <motion.path
                d="M30.872 18.69V21.872H20.771V28.976H30.058V32.121H20.771V65H16.812V18.69H30.872Z"
                variants={iconForeground}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 1,
                  default: { duration: 1, ease: "easeInOut" },
                  fill: { duration: 1, ease: [1, 0, 0.8, 1] },
                }}
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </Center>
      <Center>
        <motion.div drag>
          <h4 style={{ display: "inline-flex" }}>
            Hi!{" "}
            <motion.div
              style={{ fontSize: "inherit" }}
              animate={{ rotateZ: [-30, 10, -30, 0] }}
            >
              👋
            </motion.div>
          </h4>
        </motion.div>
      </Center>
      <Center>
        <motion.div drag>
          <h2>Welcome to my portfolio!</h2>
        </motion.div>
      </Center>
    </div>
  );
};

export default Loading;

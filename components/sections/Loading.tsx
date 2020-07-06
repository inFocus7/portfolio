import React, { FunctionComponent } from "react";
import { LoadingData } from "../../interfaces/loading";
import { Center } from "../styles";
import { AppIcon } from "../../functions/globalFunctions";
import { motion } from "framer-motion";

const Loading: FunctionComponent<LoadingData> = ({}) => {
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
          <motion.div animate={{ y: [0, 5, 0, -5, 0] }} transition={{ duration: 1.5, loop: Infinity }}>
            <img
              src={AppIcon.url}
              style={{ width: "max(7vw,100px)", margin: "0" }}
            />
          </motion.div>
          </motion.div>
      </Center>
      <Center>
        <motion.div drag>
          <h4 style={{display:"inline-flex"}}>
            Hey!{" "}
            <motion.div
              style={{ fontSize: "inherit" }}
              animate={{ rotateZ: [-30, 0, -30, 0] }}
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

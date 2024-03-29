import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("flip");
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
     <button className="example-button" onClick={handleClick}>Flip it!</button>
     <motion.div style={{height:150,width:150,backgroundColor:"black"}}
                  variants={{initial:{rotate:"0deg"},flip:{rotate:"360deg"}}}
                  initial="initial"
                  transition={{duration:2}} 
                  animate={controls}
    >

     </motion.div>
    </div>
  );
};

export default AnimationControls;

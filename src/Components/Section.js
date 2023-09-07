import React from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";

const Section = (props) => {
  const [isMounted, setIsMounted] = React.useState(props.initIsMounted);
  return (
    <FullpageSection
      onShow={() => setIsMounted(true)}
      onHide={() => setIsMounted(false)}
      style={props.style}
    >
      {isMounted && props.children}
    </FullpageSection>
  );
};

export default Section;

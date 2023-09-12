import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  //   FullpageCount,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

import NaviBar from "./Components/NaviBar";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

import bg from "./img/hotelMasterTitlePic.jpg";

import depic01 from "./img/bdepic_01.png";
import depic02 from "./img/bdepic_02.png";
// import depic10 from "./img/bdepic_10.png";

import ServiceBox00 from "./page/ServiceBox-00";
import ServiceBox01 from "./page/ServiceBox-01";
import ServiceBox02 from "./page/ServiceBox-02";
import ServiceBox03 from "./page/ServiceBox-03";
import ServiceBox04 from "./page/ServiceBox-04";
import ServiceBox05 from "./page/ServiceBox-05";
import ServiceBox06 from "./page/ServiceBox-06";
import ServiceBox07 from "./page/ServiceBox-07";
import ServiceBox08 from "./page/ServiceBox-08";
import ServiceBox09 from "./page/ServiceBox-09";

// const bgU = "https://ibb.co/X4KFWGP";

const FullPageScroll = () => {
  const manualRef = React.useRef(null);

  const SectionSyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Fullpage>
      <FullpageNavigation style={{ width: 0, opacity: 0.1 }} />
      <FullPageSections>
        <FullpageSection
          style={{
            ...SectionSyle,
            flexDirection: "column",
            justifyContent: "flex-start",
            backgroundImage: `url(${bg})`,
            backgroundSize: `cover`,
            backgroundPosition: `bottom`,
            backgroundRepeat: `no-repeat`,
          }}
        >
          <NaviBar manualRef={manualRef} />
          <ServiceBox00
            des01={"호텔 마스터"}
            des02={`그 편리함의 시작`}
            des03={`관리부터 예약까지 한번에`}
          ></ServiceBox00>
        </FullpageSection>
        <Section style={SectionSyle}>
          <ServiceBox01
            des01={"업무처리도 해야하고"}
            des02={`예약도 해야하는데 너무 복잡해`}
            depic={depic01}
          />
        </Section>
        <Section style={SectionSyle}>
          <ServiceBox01
            des01={"호텔마스터 하나로"}
            des02={`한번에 해결완료 !`}
            depic={depic02}
          />
        </Section>
        <Section style={SectionSyle}>
          <ServiceBox02></ServiceBox02>
        </Section>
        <Section style={SectionSyle}>
          <ServiceBox03></ServiceBox03>
        </Section>
        <Section style={SectionSyle}>
          <ServiceBox04></ServiceBox04>
        </Section>
        <Section style={SectionSyle}>
          <ServiceBox05></ServiceBox05>
        </Section>
        <Section style={SectionSyle}>
          <ServiceBox06></ServiceBox06>
        </Section>
        <Section style={SectionSyle}>
          <ServiceBox07></ServiceBox07>
        </Section>
        <Section style={SectionSyle}>
          <ServiceBox08></ServiceBox08>
        </Section>
        <FullpageSection
          style={{
            ...SectionSyle,
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <ServiceBox09></ServiceBox09>
          <Footer ref={manualRef} />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;

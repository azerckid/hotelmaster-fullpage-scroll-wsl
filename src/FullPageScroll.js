import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  //   FullpageCount,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

import NaviBar from "./Components/NaviBar";
import Footer from "./Components/Footer";

import bg from "./img/bMainPic.png";
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

const FullPageScroll = () => {
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
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
          }}
        >
          <NaviBar />
          <ServiceBox00
            des01={"호텔 마스터"}
            des02={`그 편리함의 시작`}
            des03={`관리부터 예약까지 한번에`}
          ></ServiceBox00>
        </FullpageSection>
        <FullpageSection style={SectionSyle}>
          <ServiceBox01
            des01={"업무처리도 해야하고"}
            des02={`예약도 해야하는데 너무 복잡해`}
            depic={depic01}
          />
        </FullpageSection>
        <FullpageSection style={SectionSyle}>
          <ServiceBox01
            des01={"호텔마스터 하나로"}
            des02={`한번에 해결완료 !`}
            depic={depic02}
          />
        </FullpageSection>
        <FullpageSection style={SectionSyle}>
          <ServiceBox02></ServiceBox02>
        </FullpageSection>
        <FullpageSection style={SectionSyle}>
          <ServiceBox03></ServiceBox03>
        </FullpageSection>
        <FullpageSection style={SectionSyle}>
          <ServiceBox04></ServiceBox04>
        </FullpageSection>
        <FullpageSection style={SectionSyle}>
          <ServiceBox05></ServiceBox05>
        </FullpageSection>
        <FullpageSection style={SectionSyle}>
          <ServiceBox06></ServiceBox06>
        </FullpageSection>
        <FullpageSection style={SectionSyle}>
          <ServiceBox07></ServiceBox07>
        </FullpageSection>
        <FullpageSection style={SectionSyle}>
          <ServiceBox08></ServiceBox08>
        </FullpageSection>
        <FullpageSection
          style={{
            ...SectionSyle,
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <ServiceBox09></ServiceBox09>
          <Footer />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;

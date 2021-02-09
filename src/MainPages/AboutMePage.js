import React, { Component } from "react";
import useWindowSize from "../Handler/WindowSize.js";
import LayoutTemplate from "../Components/General/LayoutTemplate.js";
import Profile from "../Components/AboutMeComponents/Profile.js";
import Summary from "../Components/AboutMeComponents/Summary.js";
import Education from "../Components/AboutMeComponents/Education.js";
import Languages from "../Components/AboutMeComponents/Languages.js";
import COLORS from "../StaticVariable/Colors.js";

const AboutMePage = () => {

    const renderCards = () => {
        if (windowWidth >= 1270) {
            return (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 50 }}>
                    <div style={{ gridRow: "1 / span 2", gridColumn: "1" }}>
                        <Summary />
                    </div>
                    <div style={{ gridRow: "1", gridColumn: "2" }}>
                        <Education />
                    </div>
                    <div style={{ gridRow: "2", gridColumn: "2" }}>
                        <Languages />
                    </div>
                </div>
            )
        }else{
            return (
                <div style={{ backgroundColor: COLORS.Grey }}>
                    <div style={{ margin: 30}}>
                        <Summary />
                    </div>
                    <div style={{ margin: 30}}>
                        <Education />
                    </div>
                    <div style={{ margin: 30}}>
                        <Languages />
                    </div>
                </div>
            )
        }
    }

    const [windowHeight, windowWidth] = useWindowSize();
    const headerHeight = 120;
    const footerHeight = 145;
    const bodyHeight = windowHeight - headerHeight - footerHeight;
    //console.log("window width | " + windowWidth);
    return (
        <body className="aboutme">
            <LayoutTemplate headerHeight={headerHeight} footerHeight={footerHeight} bodyHeight={bodyHeight} windowWidth={windowWidth}>
                <div style={{ width: windowWidth }}>
                    <Profile />
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBlockStart: 50, paddingBlockEnd: 50, paddingInlineStart: 100, paddingInlineEnd: 100, backgroundColor: COLORS.Grey }}>
                        {renderCards()}
                    </div>
                </div>
            </LayoutTemplate>
        </body>
    )
}

export default AboutMePage;
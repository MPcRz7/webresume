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
                <div className="renderCardsFull">
                    <div className="renderCardFullSummary">
                        <Summary factor={factor2}/>
                    </div>
                    <div className="renderCardFullEducation">
                        <Education factor={factor2}/>
                    </div>
                    <div className="renderCardFullLanguages">
                        <Languages factor={factor2}/>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="renderCardsSmall">
                    <div className="renderCardsSmallDiv">
                        <Summary factor={factor2}/>
                    </div>
                    <div className="renderCardsSmallDiv">
                        <Education factor={factor2}/>
                    </div>
                    <div className="renderCardsSmallDiv">
                        <Languages factor={factor2}/>
                    </div>
                </div>
            )
        }
    }

    const [windowHeight, windowWidth] = useWindowSize();
    const headerHeight = 120;
    const footerHeight = 145;
    const bodyHeight = windowHeight - headerHeight - footerHeight;

    const threshold = 1100;
    const factor = windowWidth < threshold ? (windowWidth/threshold) : 1;

    const threshold2 = 700;
    const factor2 = windowWidth < threshold2 ? (windowWidth/threshold2) : 1;
    return (
        <body className="aboutme">
            <LayoutTemplate headerHeight={headerHeight} footerHeight={footerHeight} bodyHeight={bodyHeight} windowWidth={windowWidth} factor={factor}>
                <div style={{ width: windowWidth }}>
                    <Profile factor={factor} />
                    <div className="renderCards">
                        {renderCards()}
                    </div>
                </div>
            </LayoutTemplate>
        </body>
    )
}

export default AboutMePage;
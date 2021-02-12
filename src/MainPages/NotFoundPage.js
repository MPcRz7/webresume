import React, { Component } from "react";
import useWindowSize from "../Handler/WindowSize.js";
import LayoutTemplate from "../Components/General/LayoutTemplate.js";

const NotFoundPage = () => {
    const [windowHeight, windowWidth] = useWindowSize();
    const headerHeight = 120;
    const footerHeight = 145;
    const bodyHeight = windowHeight - headerHeight - footerHeight;
    const threshold = 1100;
    const factor = windowWidth < threshold ? (windowWidth/threshold) : 1;
    return (
        <div>
            <LayoutTemplate headerHeight={headerHeight} footerHeight={footerHeight} bodyHeight={bodyHeight} windowWidth={windowWidth} factor={factor}>
                <div className="NotFoundDiv" style={{ height: bodyHeight }}>
                    <p style={{ fontSize: 150*factor }}>404 Not found</p>
                </div>
            </LayoutTemplate>
        </div>
    )
}

export default NotFoundPage;
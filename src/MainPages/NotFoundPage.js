import React, { Component } from "react";
import useWindowSize from "../Handler/WindowSize.js";
import LayoutTemplate from "../Components/General/LayoutTemplate.js";

const NotFoundPage = () => {
    const [windowHeight, windowWidth] = useWindowSize();
    const headerHeight = 120;
    const footerHeight = 145;
    const bodyHeight = windowHeight - headerHeight - footerHeight;
    return (
        <div>
            <LayoutTemplate headerHeight={headerHeight} footerHeight={footerHeight} bodyHeight={bodyHeight}>
                <div style={{ height: bodyHeight, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <p style={{ fontSize: 150 }}>404 Not found</p>
                </div>
            </LayoutTemplate>
        </div>
    )
}

export default NotFoundPage;
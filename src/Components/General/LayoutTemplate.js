import React, { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

class LayoutTemplate extends Component {
    render() {
        const { children, headerHeight, footerHeight, bodyHeight, windowWidth } = this.props;
        return (
            <div style={{ height: headerHeight, position: "relative" }}>
                <div style={{ position: "fixed", top: "0%", width: "100%", zIndex: 1, height: headerHeight }}>
                    <Header headerHeight={headerHeight} windowWidth={windowWidth} />
                </div>
                <div style={{ paddingBlockStart: headerHeight, height: "auto", minHeight: bodyHeight}}>{children}</div>
                <Footer footerHeight={footerHeight} windowWidth={windowWidth} />
            </div>
        )
    }
}

export default LayoutTemplate;
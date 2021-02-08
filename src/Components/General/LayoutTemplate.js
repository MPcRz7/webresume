import React, { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

class LayoutTemplate extends Component {
    render() {
        const { children, headerHeight, footerHeight, bodyHeight } = this.props;
        // const windowHeight = window.innerHeight;
        // const footerHeight = 145;
        // const bodyHeight = windowHeight - headerHeight - footerHeight;
        return (
            <div style={{ height: window.innerHeight, position: "relative" }}>
                <div style={{ position: "fixed", top: "0%", width: "100%", zIndex: 1, height: headerHeight }}>
                    <Header headerHeight={headerHeight} />
                </div>
                <div style={{ paddingBlockStart: headerHeight, height: "auto", minHeight: bodyHeight}}>{children}</div>
                <Footer footerHeight={footerHeight} />
            </div>
        )
    }
}

export default LayoutTemplate;
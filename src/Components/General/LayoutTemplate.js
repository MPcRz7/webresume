import React, { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

class LayoutTemplate extends Component {
    render() {
        const { children, headerHeight, footerHeight, bodyHeight, windowWidth, factor } = this.props;
        const minHeight = Math.max(bodyHeight, 500);
        return (
            <div className="LayoutTemplate" style={{ height: headerHeight }}>
                <div className="LayoutTemplateHeader" style={{ height: headerHeight }}>
                    <Header headerHeight={headerHeight} windowWidth={windowWidth} factor={factor} />
                </div>
                <div className="LayoutTemplateBody" style={{ paddingBlockStart: headerHeight, minHeight: minHeight*factor }}>{children}</div>
                <Footer footerHeight={footerHeight} windowWidth={windowWidth} factor={factor}/>
            </div>
        )
    }
}

export default LayoutTemplate;
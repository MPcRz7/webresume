import React, { Component } from "react";
import { Link } from "react-router-dom";
import COLORS from "../../StaticVariable/Colors.js";

class Header extends Component {

    constructor(props) {
        super(props);
    }

    renderHeader() {
        const { headerHeight, windowWidth } = this.props;
        if (windowWidth >= 950) {
            return (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr", backgroundColor: "#FFFFFFEF", height: headerHeight, width: "100%" }}>
                    <div style={{ gridColumn: "1", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Link to="/webresume" ><img src="/webresume/images/Mos_logo.png" width="60px" style={{ borderRadius: "25%" }} /></Link>
                    </div>
                    <div style={{ gridColumn: "2", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <p className="HeaderLinkPage"><Link to="/webresume" className="home">Home</Link></p>
                        <p className="HeaderLinkPage"><Link to="/webresume/skill" className="skill">Skill</Link></p>
                        <p className="HeaderLinkPage"><Link to="/webresume/experience" className="experience">Experience</Link></p>
                        <p className="HeaderLinkPage"><Link to="/webresume/portfolio" className="portfolio">Portfolio</Link></p>
                        <p className="HeaderLinkPage"><Link to="/webresume/aboutme" className="aboutme">About me</Link></p>
                    </div>
                </div>
            )
        }else{
            const threshold = 950;
            const minWidth = 600;
            const windowWidthFactor = (threshold - windowWidth)/(threshold - minWidth);
            const fontSizeMax = 24;
            const fontSizeMin = 15;
            const fontSizeCompensate = (fontSizeMax - fontSizeMin)*windowWidthFactor;
            const fontSizeRelateWidth = fontSizeCompensate >= 0 ? fontSizeCompensate <= (fontSizeMax - fontSizeMin) ? (fontSizeMax - fontSizeCompensate) : fontSizeMin : fontSizeMax;
            const marginInlineMax = 30;
            const marginInlineMin = 15;
            const marginCompensate = (marginInlineMax - marginInlineMin)*windowWidthFactor;
            const marginRelateWidth = marginCompensate >= 0 ? marginCompensate <= (marginInlineMax - marginInlineMin) ? (marginInlineMax - marginCompensate) : marginInlineMin : marginInlineMax;
            return(
                <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr", backgroundColor: "#FFFFFFEF", height: headerHeight, width: "100%" }}>
                    <div style={{ gridColumn: "1", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Link to="/webresume" ><img src="/webresume/images/Mos_logo.png" width="60px" style={{ borderRadius: "25%" }} /></Link>
                    </div>
                    <div style={{ gridColumn: "2", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <p className="HeaderLinkPage" style={{ fontSize: fontSizeRelateWidth, marginInlineStart: marginRelateWidth, marginInlineEnd: marginRelateWidth }}><Link to="/webresume" className="home">Home</Link></p>
                        <p className="HeaderLinkPage" style={{ fontSize: fontSizeRelateWidth, marginInlineStart: marginRelateWidth, marginInlineEnd: marginRelateWidth }}><Link to="/webresume/skill" className="skill">Skill</Link></p>
                        <p className="HeaderLinkPage" style={{ fontSize: fontSizeRelateWidth, marginInlineStart: marginRelateWidth, marginInlineEnd: marginRelateWidth }}><Link to="/webresume/experience" className="experience">Experience</Link></p>
                        <p className="HeaderLinkPage" style={{ fontSize: fontSizeRelateWidth, marginInlineStart: marginRelateWidth, marginInlineEnd: marginRelateWidth }}><Link to="/webresume/portfolio" className="portfolio">Portfolio</Link></p>
                        <p className="HeaderLinkPage" style={{ fontSize: fontSizeRelateWidth, marginInlineStart: marginRelateWidth, marginInlineEnd: marginRelateWidth }}><Link to="/webresume/aboutme" className="aboutme">About me</Link></p>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
            </div>
        )
    }
}

export default Header;
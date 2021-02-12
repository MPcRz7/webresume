import React, { Component } from "react";
import { Link } from "react-router-dom";
import COLORS from "../../StaticVariable/Colors.js";

class Header extends Component {

    constructor(props) {
        super(props);
    }

    renderHeader() {
        const { headerHeight, windowWidth, factor } = this.props;
        if (windowWidth >= 1100) {
            return (
                <div className="renderHeader" style={{ height: headerHeight }}>
                    <div className="renderHeaderLogo">
                        <Link to="/webresume" ><img src="/webresume/images/Mos_logo.png" width="60px" /></Link>
                    </div>
                    <div className="renderHeaderPageName">
                        <p><Link to="/webresume" className="home">Home</Link></p>
                        <p><Link to="/webresume/skill" className="skill">Skill</Link></p>
                        <p><Link to="/webresume/experience" className="experience">Experience</Link></p>
                        <p><Link to="/webresume/portfolio" className="portfolio">Portfolio</Link></p>
                        <p><Link to="/webresume/aboutme" className="aboutme">About me</Link></p>
                    </div>
                </div>
            )
        }else{
            // const threshold = 950;
            // const minWidth = 600;
            // const windowWidthFactor = (threshold - windowWidth)/(threshold - minWidth);
            // const fontSizeMax = 24;
            // const fontSizeMin = 15;
            // const fontSizeCompensate = (fontSizeMax - fontSizeMin)*windowWidthFactor;
            // const fontSizeRelateWidth = fontSizeCompensate >= 0 ? fontSizeCompensate <= (fontSizeMax - fontSizeMin) ? (fontSizeMax - fontSizeCompensate) : fontSizeMin : fontSizeMax;
            // const marginInlineMax = 30;
            // const marginInlineMin = 15;
            // const marginCompensate = (marginInlineMax - marginInlineMin)*windowWidthFactor;
            // const marginRelateWidth = marginCompensate >= 0 ? marginCompensate <= (marginInlineMax - marginInlineMin) ? (marginInlineMax - marginCompensate) : marginInlineMin : marginInlineMax;
            return(
                <div className="renderHeader" style={{ height: headerHeight }}>
                    <div className="renderHeaderLogo">
                        <Link to="/webresume" ><img src="/webresume/images/Profile_Mos_logo.png" width={60*factor} style={{ borderRadius: "25%" }} /></Link>
                    </div>
                    <div className="renderHeaderPageName">
                        <p style={{ fontSize: 24*factor, marginInlineStart: 30*factor, marginInlineEnd: 30*factor }}><Link to="/webresume" className="home">Home</Link></p>
                        <p style={{ fontSize: 24*factor, marginInlineStart: 30*factor, marginInlineEnd: 30*factor }}><Link to="/webresume/skill" className="skill">Skill</Link></p>
                        <p style={{ fontSize: 24*factor, marginInlineStart: 30*factor, marginInlineEnd: 30*factor }}><Link to="/webresume/experience" className="experience">Experience</Link></p>
                        <p style={{ fontSize: 24*factor, marginInlineStart: 30*factor, marginInlineEnd: 30*factor }}><Link to="/webresume/portfolio" className="portfolio">Portfolio</Link></p>
                        <p style={{ fontSize: 24*factor, marginInlineStart: 30*factor, marginInlineEnd: 30*factor }}><Link to="/webresume/aboutme" className="aboutme">About me</Link></p>
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
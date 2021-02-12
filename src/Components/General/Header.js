import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                        <Link to="/webresume" ><img src="/webresume/images/Profile_Mos_logo.png" width="60px" /></Link>
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
        } else {
            return (
                <div className="renderHeader" style={{ height: headerHeight }}>
                    <div className="renderHeaderLogo">
                        <Link to="/webresume" ><img src="/webresume/images/Profile_Mos_logo.png" width={60*factor} /></Link>
                    </div>
                    <div className="renderHeaderPageName">
                        <p style={{ fontSize: 24 * factor, marginInlineStart: 30 * factor, marginInlineEnd: 30 * factor }}><Link to="/webresume" className="home">Home</Link></p>
                        <p style={{ fontSize: 24 * factor, marginInlineStart: 30 * factor, marginInlineEnd: 30 * factor }}><Link to="/webresume/skill" className="skill">Skill</Link></p>
                        <p style={{ fontSize: 24 * factor, marginInlineStart: 30 * factor, marginInlineEnd: 30 * factor }}><Link to="/webresume/experience" className="experience">Experience</Link></p>
                        <p style={{ fontSize: 24 * factor, marginInlineStart: 30 * factor, marginInlineEnd: 30 * factor }}><Link to="/webresume/portfolio" className="portfolio">Portfolio</Link></p>
                        <p style={{ fontSize: 24 * factor, marginInlineStart: 30 * factor, marginInlineEnd: 30 * factor }}><Link to="/webresume/aboutme" className="aboutme">About me</Link></p>
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
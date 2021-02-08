import React, { Component } from "react";
import { Link } from "react-router-dom";
import COLORS from "../../StaticVariable/Colors.js";

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {headerHeight} = this.props;
        return (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr", backgroundColor: "#FFFFFFEF", height: headerHeight, width: "100%" }}>
                <div style={{ gridColumn: "1", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {/* <p style={{ color: COLORS.Red, fontSize: 72 }}>M</p> */}
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
    }
}

export default Header;
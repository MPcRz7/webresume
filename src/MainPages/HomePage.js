import React, { Component } from "react";
import COLORS from "../StaticVariable/Colors.js";
import LayoutTemplate from "../Components/General/LayoutTemplate.js";

class Home extends Component {
    render() {
        const windowHeight = window.innerHeight;
        const headerHeight = 120;
        const footerHeight = 145;
        const bodyHeight = windowHeight - headerHeight - footerHeight;
        const mosHomeImageHeight = bodyHeight * 0.9;
        return (
            <body className="home">
                <LayoutTemplate>
                    <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridTemplateColumns: "4fr 6fr", height: "100%", minHeight: bodyHeight }}>
                        <div style={{ gridRow: "1 / span 2", gridColumn: "1", display: "flex", justifyContent: "flex-end", alignItems: "flex-end", paddingInline: 10 }}>
                            <img src="/webresume/images/Mos_HomeImage.png" style={{ height: mosHomeImageHeight }} />
                        </div>
                        <div style={{ gridRow: "1", gridColumn: "2", display: "flex", flexDirection: "column", justifyContent: "center", paddingInline: 20 }}>
                            <p style={{ fontSize: 27, textTransform: "uppercase", color: COLORS.DarkGrey }} >"Iff youu can't stop the waves, learn to surf."</p>
                            <p style={{ fontSize: 24, color: COLORS.DarkGrey, marginLeft: 200 }} >I didn't say that, I just copied from the internet.</p>
                        </div>
                        <div style={{ gridRow: "2", gridColumn: "2", paddingBlock: 30, paddingLeft: 100, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <p style={{ fontSize: 72, color: COLORS.Black, textTransform: "uppercase" }}>Mos</p>
                            <p style={{ fontSize: 48, color: COLORS.Black, textTransform: "uppercase" }}>Purachet Ruangtanasak</p>
                            <p style={{ fontSize: 36, color: COLORS.Red }}>Mobile Application Developer</p>
                        </div>
                    </div>
                </LayoutTemplate>
            </body>
        )
    }
}

export default Home;
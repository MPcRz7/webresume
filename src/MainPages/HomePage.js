import React, { Component } from "react";
import COLORS from "../StaticVariable/Colors.js";
import LayoutTemplate from "../Components/General/LayoutTemplate.js";
import useWindowSize from "../Handler/WindowSize.js";

const Home = () => {
    const [windowHeight, windowWidth] = useWindowSize();
    const headerHeight = 120;
    const footerHeight = 145;
    const bodyHeight = windowHeight - headerHeight - footerHeight;
    const mosHomeImageHeight = bodyHeight * 0.95;
    const minHeight = Math.max(bodyHeight, 500);

    //console.log("width |" + windowWidth);

    const renderUser = () => {
        if (windowWidth >= 1100) {
            return (
                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridTemplateColumns: "4fr 6fr", height: "100%", minHeight: bodyHeight }}>
                    <div style={{ gridRow: "1 / span 2", gridColumn: "1", display: "flex", justifyContent: "flex-end", alignItems: "flex-end", paddingInlineStart: 10, paddingInlineEnd: 10}}>
                        <img src="/webresume/images/Mos_HomeImage.png" style={{ height: mosHomeImageHeight, minHeight: minHeight }} />
                    </div>
                    <div style={{ gridRow: "1", gridColumn: "2", display: "flex", flexDirection: "column", justifyContent: "center", paddingInlineStart: 20}}>
                        <p style={{ fontSize: 27, textTransform: "uppercase", color: COLORS.DarkGrey }} >"If you can't stop the waves, learn to surf."</p>
                        <p style={{ fontSize: 24, color: COLORS.DarkGrey, textAlign: "center" }} >I didn't say that, I just copied from the internet.</p>
                    </div>
                    <div style={{ gridRow: "2", gridColumn: "2", paddingBlockStart: 30, paddingBlockEnd: 30, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center" }}>
                        <div>
                            <p style={{ fontSize: 72, color: COLORS.Black, textTransform: "uppercase" }}>Mos</p>
                            <p style={{ fontSize: 48, color: COLORS.Black, textTransform: "uppercase" }}>Purachet Ruangtanasak</p>
                            <p style={{ fontSize: 36, color: COLORS.Red }}>Mobile Application Developer</p>
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <div style={{ position: "relative", height: "100%", minHeight: minHeight }}>
                    <div style={{ position: "absolute", left: "0%", bottom: "0%", display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
                        <img src="/webresume/images/Mos_HomeImage.png" style={{ height: mosHomeImageHeight, minHeight: minHeight, opacity: "100%" }} />
                    </div>
                    <div style={{ position: "absolute", right: "0%", top: "0%", bottom: "50%", display: "flex", flexDirection: "column", justifyContent: "center", paddingInlineEnd: 20, zIndex: -1 }}>
                        <p style={{ fontSize: 27, textTransform: "uppercase", color: COLORS.DarkGrey, backgroundColor: "#FFFFFFEF" }} >"If you can't stop the waves, learn to surf."</p>
                        <p style={{ fontSize: 24, color: COLORS.DarkGrey, textAlign: "center", backgroundColor: "#FFFFFFEF" }} >I didn't say that, I just copied from the internet.</p>
                    </div>
                    <div style={{ position: "absolute", right: "0%", bottom: "0%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center" }}>
                        <div style={{ backgroundColor: "#FFFFFFEF", paddingBlockStart: 20, paddingBlockEnd: 30, paddingInlineStart: 30, paddingInlineEnd: 30 }}>
                            <p style={{ fontSize: 72, color: COLORS.Black, textTransform: "uppercase" }}>Mos</p>
                            <p style={{ fontSize: 48, color: COLORS.Black, textTransform: "uppercase" }}>Purachet Ruangtanasak</p>
                            <p style={{ fontSize: 36, color: COLORS.Red }}>Mobile Application Developer</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <body className="home">
            <LayoutTemplate headerHeight={headerHeight} footerHeight={footerHeight} bodyHeight={bodyHeight} windowWidth={windowWidth}>
                {renderUser()}
            </LayoutTemplate>
        </body>
    )
}

export default Home;
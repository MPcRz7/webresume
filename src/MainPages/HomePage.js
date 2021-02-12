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

    const threshold = 1100;
    const factor = windowWidth < threshold ? (windowWidth/threshold) : 1;

    const renderUser = () => {
        if (windowWidth >= threshold) {
            return (
                <div className="UserFull" style={{ minHeight: bodyHeight }}>
                    <div className="UserFullPic">
                        <img src="/webresume/images/Mos_HomeImage.png" style={{ height: mosHomeImageHeight, minHeight: minHeight}} />
                    </div>
                    <div className="UserFullMotto">
                        <p className="UserFullQuote">"If you can't stop the waves, learn to surf."</p>
                        <p className="UserFullSaidBy" >I didn't say that, I just copied from the internet.</p>
                    </div>
                    <div className="UserFullUserName">
                        <div>
                            <p className="UserFullNickname">Mos</p>
                            <p className="UserFullFullName">Purachet Ruangtanasak</p>
                            <p className="UserFullPosition">Mobile Application Developer</p>
                        </div>
                    </div>
                </div>
            )
        }else{          
            return (
                <div className="UserSmall" style={{ minHeight: minHeight*factor }}>
                    <div className="UserSmallPic">
                        <img src="/webresume/images/Mos_HomeImage.png" style={{ height: mosHomeImageHeight*factor, minHeight: minHeight*factor }} />
                    </div>
                    <div className="UserSmallMotto">
                        <p className="UserSmallQuote" style={{ fontSize: 27*factor }} >"If you can't stop the waves, learn to surf."</p>
                        <p className="UserSmallSaidBy" style={{ fontSize: 24*factor }} >I didn't say that, I just copied from the internet.</p>
                    </div>
                    <div className="UserSmallUserName">
                        <div className="UserSmallUserName2">
                            <p className="UserSmallNickname" style={{ fontSize: 72*factor }}>Mos</p>
                            <p className="UserSmallFullName" style={{ fontSize: 48*factor }}>Purachet Ruangtanasak</p>
                            <p className="UserSmallPosition" style={{ fontSize: 36*factor }}>Mobile Application Developer</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <body className="home">
            <LayoutTemplate headerHeight={headerHeight} footerHeight={footerHeight} bodyHeight={bodyHeight} windowWidth={windowWidth} factor={factor}>
                {renderUser()}
            </LayoutTemplate>
        </body>
    )
}

export default Home;
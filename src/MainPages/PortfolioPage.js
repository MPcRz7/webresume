import React, { Component, useState, useEffect } from "react";
import useWindowSize from "../Handler/WindowSize.js";
import LayoutTemplate from "../Components/General/LayoutTemplate.js";
import PortfolioListItemTemplate from "../Components/PortfolioComponents/PortfolioListItemTemplate.js";
import axios from "axios";
import resumeData from "../LocalData/resumeData.json";

const PortfolioPage = () => {

    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const userId = 1;
        // axios.get(process.env.REACT_APP_API_URL + "/portfolios/" + userId).then(res => {
        //     setPortfolio(res.data.userPortfolio);
        // })
        setPortfolio(resumeData.portfolios.find(_ => _.id == userId).userPortfolio);
    }, []);

    const renderAppName = () => {
        return (
            portfolio.map((createdApp) => {
                return (
                    <div key={createdApp.id}>
                        <PortfolioListItemTemplate {...createdApp} />
                    </div>
                )
            })
        )
    }

    const [windowHeight, windowWidth] = useWindowSize();
    const headerHeight = 120;
    const footerHeight = 145;
    const bodyHeight = windowHeight - headerHeight - footerHeight;
    return (
        <body className="portfolio">
            <LayoutTemplate headerHeight={headerHeight} footerHeight={footerHeight} bodyHeight={bodyHeight} windowWidth={windowWidth}>
                    <div style={{ display: "flex", flexFlow: "wrap", paddingBlockStart: 20, paddingBlockEnd: 20, justifyContent: "center" }}>
                        {renderAppName()}
                    </div>
            </LayoutTemplate>
        </body>
    )
}

export default PortfolioPage;
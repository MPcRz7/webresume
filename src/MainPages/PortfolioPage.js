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
            <LayoutTemplate headerHeight={headerHeight} footerHeight={footerHeight} bodyHeight={bodyHeight}>
                <div style={{ display: "flex", flexFlow: "wrap", paddingBlock: 20 }}>
                    {renderAppName()}
                </div>
            </LayoutTemplate>
        </body>
    )
}


// class PortfolioPage extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             portfolio : []
//         }
//     }

//     componentDidMount(){
//         const userId = 1;
//         // axios.get(process.env.REACT_APP_API_URL + "/portfolios/" + userId).then(res => {
//         //     this.setState({ portfolio: res.data.userPortfolio });
//         // })
//         this.setState({ portfolio : resumeData.portfolios.find(_=>_.id == userId).userPortfolio });
//     }

//     renderAppName() {
//         return (
//             this.state.portfolio.map((createdApp) => {
//                 return (
//                     <div key={createdApp.id}>
//                         <PortfolioListItemTemplate {...createdApp} />
//                     </div>
//                 )
//             })
//         )
//     }

//     render() {
//         return (
//             <body className="portfolio">
//                 <LayoutTemplate>
//                     <div style={{ display: "flex", flexFlow: "wrap", paddingBlock: 20 }}>
//                         {this.renderAppName()}
//                     </div>
//                 </LayoutTemplate>
//             </body>
//         )
//     }
// }

export default PortfolioPage;
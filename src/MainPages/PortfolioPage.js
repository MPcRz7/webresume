import axios from "axios";
import React, { Component } from "react";
import LayoutTemplate from "../Components/General/LayoutTemplate.js";
import PortfolioListItemTemplate from "../Components/PortfolioComponents/PortfolioListItemTemplate.js";


class PortfolioPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // selfLearnApps: [{ appName: "About Mos", framework: "React JS", workingType: "Self Learning", detail: "About Mos is created for web application development practice. It also can use as a resume for apply the job in the future.", imageAppPath: "/images/Mos_logo.png", imageFrameworkPath: "/images/ReactJS_Skill.png" },
            // { appName: "Just Tong Jum", framework: "React Native", workingType: "Self Learning", detail: "Just Tong Jum is vocabruary application that help us easier to memory any vocabruary any language by using concept of flat cards.", imageAppPath: "/images/JustTongJum_logo.png", imageFrameworkPath: "/images/ReactNative_Skill.png" },
            // { appName: "Aggro App", framework: "React Native", workingType: "Freelance", detail: "Aggro app is an application that help farmer easier to mix fertilizer. It can inform that which ingredient is dangerous or save.", imageAppPath: "/images/Aggro_logo.png", imageFrameworkPath: "/images/ReactNative_Skill.png" },
            // { appName: "Aggro App", framework: "React Native", workingType: "Work experience", detail: "Aggro app is an application that help farmer easier to mix fertilizer. It can inform that which ingredient is dangerous or save.", imageAppPath: "/images/Aggro_logo.png", imageFrameworkPath: "/images/ReactNative_Skill.png" }
            // ]
            portfolio : []
        }
    }

    componentDidMount(){
        const userId = 1;
        axios.get("http://localhost:3001/portfolios/" + userId).then(res => {
            this.setState({ portfolio: res.data.userPortfolio });
        })
    }

    renderAppName() {
        return (
            this.state.portfolio.map((createdApp) => {
                return (
                    <div key={createdApp.id}>
                        <PortfolioListItemTemplate {...createdApp} />
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <body className="portfolio">
                <LayoutTemplate>
                    <div style={{ display: "flex", flexFlow: "wrap", paddingBlock: 20 }}>
                        {this.renderAppName()}
                    </div>
                </LayoutTemplate>
            </body>
        )
    }
}

export default PortfolioPage;
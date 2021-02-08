import axios from "axios";
import React, { Component } from "react";
import LayoutTemplate from "../Components/General/LayoutTemplate.js";
import PortfolioListItemTemplate from "../Components/PortfolioComponents/PortfolioListItemTemplate.js";
import resumeData from "../LocalData/resumeData.json";


class PortfolioPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolio : []
        }
    }

    componentDidMount(){
        const userId = 1;
        // axios.get(process.env.REACT_APP_API_URL + "/portfolios/" + userId).then(res => {
        //     this.setState({ portfolio: res.data.userPortfolio });
        // })
        this.setState({ portfolio : resumeData.portfolios.find(_=>_.id == userId).userPortfolio });
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
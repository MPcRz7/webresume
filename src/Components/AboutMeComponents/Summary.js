import React, { Component } from "react";
import CardTemplate from "../General/CardTemplate.js";

class Summary extends Component {
    render() {
        const { factor } = this.props;
        return (
            <CardTemplate title="Summary" factor={factor}>
                <div>
                    <div className="AboutMeSummary">
                        <p className="AboutMeSummaryTopic" style={{ fontSize: 24*factor }}>Experience</p>
                        <p style={{ fontSize: 16*factor }}>3 years of experience about programming relate job.</p>
                        <p style={{ fontSize: 16*factor }}>- 2 years of experience in Software Engineer.</p>
                        <p style={{ fontSize: 16*factor }}>- 1 year of experience in Mobile Application Developer.</p>
                    </div>
                    <div className="AboutMeSummary">
                        <p className="AboutMeSummaryTopic" style={{ fontSize: 24*factor }}>Application Project</p>
                        <p style={{ fontSize: 16*factor }}>6 applications project experience.</p>
                        <p style={{ fontSize: 16*factor }}>- 3 mobile application projects for company job.</p>
                        <p style={{ fontSize: 16*factor }}>- 1 mobile application project for self learning.</p>
                        <p style={{ fontSize: 16*factor }}>- 1 mobile application project for freelance job.</p>
                        <p style={{ fontSize: 16*factor }}>- 1 web application project for self learning.</p>
                    </div>
                    <div className="AboutMeSummary">
                        <p className="AboutMeSummaryTopic" style={{ fontSize: 24*factor }}>Short Target</p>
                        <p style={{ fontSize: 16*factor }}>Want to be a full stack developer.</p>
                        <p style={{ fontSize: 16*factor }}>- Be able to resolve more complicated Frontend requirement.</p>
                        <p style={{ fontSize: 16*factor }}>- Learn and get more experience about Backend development.</p>
                        <p style={{ fontSize: 16*factor }}>- Be able to take responsibility for whole application development.</p>
                    </div>
                    <div className="AboutMeSummary">
                        <p className="AboutMeSummaryTopic" style={{ fontSize: 24*factor }}>Personality</p>
                        <p style={{ fontSize: 16*factor }}>- Challenging.</p>
                        <p style={{ fontSize: 16*factor }}>- High passion.</p>
                        <p style={{ fontSize: 16*factor }}>- Always improve myself and self learning.</p>
                        <p style={{ fontSize: 16*factor }}>- Happy to communicate with people.</p>
                    </div>
                </div>
            </CardTemplate>
        )
    }
}

export default Summary;
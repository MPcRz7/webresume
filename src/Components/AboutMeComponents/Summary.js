import React, { Component } from "react";
import CardTemplate from "../General/CardTemplate.js";

class Summary extends Component {
    render() {
        return (
            <CardTemplate title="Summary">
                <div>
                    <div style={{ paddingBlock: 10 }}>
                        <p style={{ color: "red", textTransform: "uppercase", fontSize: 24, paddingBlock: 5 }}>Experience</p>
                        <p>3 years of experience about programming relate job.</p>
                        <p>- 2 years of experience in Software Engineer.</p>
                        <p>- 1 year of experience in Mobile Application Developer.</p>
                    </div>
                    <div style={{ paddingBlock: 10 }}>
                        <p style={{ color: "red", textTransform: "uppercase", fontSize: 24, paddingBlock: 5 }}>Application Project</p>
                        <p>6 applications project experience.</p>
                        <p>- 3 mobile application projects for company job.</p>
                        <p>- 1 mobile application project for self learning.</p>
                        <p>- 1 mobile application project for freelance job.</p>
                        <p>- 1 web application project for self learning.</p>
                    </div>
                    <div style={{ paddingBlock: 10 }}>
                        <p style={{ color: "red", textTransform: "uppercase", fontSize: 24, paddingBlock: 5 }}>Short Target</p>
                        <p>Want to be a full stack developer.</p>
                        <p>- Be able to resolve more complicated Frontend requirement.</p>
                        <p>- Learn and get more experience about Backend development.</p>
                        <p>- Be able to take responsibility for whole application development.</p>
                    </div>
                    <div style={{ paddingBlock: 10 }}>
                        <p style={{ color: "red", textTransform: "uppercase", fontSize: 24, paddingBlock: 5 }}>Personality</p>
                        <p>- Challenging.</p>
                        <p>- High passion.</p>
                        <p>- Always improve myself and self learning.</p>
                        <p>- Happy to communicate with people.</p>
                    </div>
                </div>
            </CardTemplate>
        )
    }
}

export default Summary;
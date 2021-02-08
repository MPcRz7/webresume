import React, { Component } from "react";

class PortfolioListItemTemplate extends Component {
    constructor(props) {
        super(props);

    }

    renderLearnedSkill(learnedSkills){
        return(
            learnedSkills.map( (learnedSkill) => {
                return(
                    <p key={learnedSkill}>
                        <span>- </span>
                        <span>{learnedSkill}</span>
                    </p>
                )
            })
        )
    }

    render() {
        const { appName, framework, workingType, description, numberOfDevMembers, learnedSkills, imageAppPath, imageFrameworkPath } = this.props;
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 30, width: "420px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", marginBlockStart: 10, marginBlockEnd: 10, width: "100%" }}>
                    <div style={{ gridColumn: 2, position: "relative" }}>
                        <div style={{ width: "150px", height: "150px", backgroundImage: `url(${imageAppPath})`, backgroundPosition: "center", backgroundSize: "cover", border: "7px solid red", borderRadius: "50%" }} />
                        <div style={{ position: "absolute", right: "0%", bottom: "0%", width: "50px", height: "50px", backgroundImage: `url(${imageFrameworkPath})`, backgroundPosition: "center", backgroundSize: "cover", border: "7px solid red", borderRadius: "50%" }} />
                    </div>
                    <div style={{ gridColumn: 3, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
                        <div style={{ paddingBlockStart: 5, paddingBlockEnd: 5, paddingInlineStart: 10, paddingInlineEnd: 10, borderRadius: 5, border: "2px solid red" }}>
                            <p style={{ fontSize: 12, color: "red" }}>{workingType}</p>
                        </div>
                    </div>
                </div>
                <div style={{ marginBlockStart: 5, marginBlockEnd: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <p style={{ fontSize: 24 }}>{appName}</p>
                    <p style={{ fontSize: 18 }}>[{framework}]</p>
                </div>
                <div>
                    <p>
                        <span style={{ color: "#FF0000", textTransform: "uppercase" }}>Description: </span>
                        <span>{description}</span>
                    </p>
                    <p>
                        <span style={{ color: "#FF0000", textTransform: "uppercase" }}>Number of dev members: </span>
                        <span>{numberOfDevMembers}</span>
                    </p>
                    <p>
                        <span style={{ color: "#FF0000", textTransform: "uppercase" }}>Learned Skill: </span>                       
                    </p>
                    {this.renderLearnedSkill(learnedSkills)}
                </div>
            </div>
        )
    }
}

export default PortfolioListItemTemplate;
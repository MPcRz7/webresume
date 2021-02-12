import React, { Component } from "react";

class PortfolioListItemTemplate extends Component {
    constructor(props) {
        super(props);

    }

    renderLearnedSkill(learnedSkills, factor) {
        return (
            learnedSkills.map((learnedSkill) => {
                return (
                    <p key={learnedSkill} style={{ fontSize: 16*factor }}>
                        <span>- </span>
                        <span>{learnedSkill}</span>
                    </p>
                )
            })
        )
    }

    render() {
        const { appName, framework, workingType, description, numberOfDevMembers, learnedSkills, imageAppPath, imageFrameworkPath, windowWidth, factor } = this.props;
        
        const templateWidth = windowWidth*factor;
        return (
            <div className="PortfolioListItemTemplate" style={{ width: templateWidth, maxWidth: 420 }}>
                <div className="PortfolioListItemTemplateImage">
                    <div className="PortfolioListItemTemplateProfile">
                        <div className="PortfolioListItemTemplateAppPic" style={{ backgroundImage: `url(${imageAppPath})`, width: 150*factor, height: 150*factor }} />
                        <div className="PortfolioListItemTemplateFrameworkPic" style={{ backgroundImage: `url(${imageFrameworkPath})`, width: 50*factor, height: 50*factor }} />
                    </div>
                    <div className="PortfolioListItemTemplateTags">
                        <div className="PortfolioListItemTemplateWorkingType">
                            <p style={{ fontSize: 16*factor }}>{workingType}</p>
                        </div>
                    </div>
                </div>
                <div className="PortfolioListItemTemplateTopic">
                    <p className="PortfolioListItemTemplateAppName" style={{ fontSize: 24*factor }}>{appName}</p>
                    <p className="PortfolioListItemTemplateFrameworkName" style={{ fontSize: 18*factor }}>[{framework}]</p>
                </div>
                <div>
                    <p style={{ fontSize: 16*factor }}>
                        <span className="PortfolioListItemTemplateExplanationTitle">Description: </span>
                        <span>{description}</span>
                    </p>
                    <p style={{ fontSize: 16*factor }}>
                        <span className="PortfolioListItemTemplateExplanationTitle">Number of dev members: </span>
                        <span>{numberOfDevMembers}</span>
                    </p>
                    <p style={{ fontSize: 16*factor }}>
                        <span className="PortfolioListItemTemplateExplanationTitle">Learned Skill: </span>
                    </p>
                    {this.renderLearnedSkill(learnedSkills, factor)}
                </div>
            </div>
        )
    }
}

export default PortfolioListItemTemplate;
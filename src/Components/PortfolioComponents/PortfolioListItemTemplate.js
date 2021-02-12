import React, { Component } from "react";

class PortfolioListItemTemplate extends Component {
    constructor(props) {
        super(props);

    }

    renderLearnedSkill(learnedSkills) {
        return (
            learnedSkills.map((learnedSkill) => {
                return (
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
            <div className="PortfolioListItemTemplate">
                <div className="PortfolioListItemTemplateImage">
                    <div className="PortfolioListItemTemplateProfile">
                        <div className="PortfolioListItemTemplateAppPic" style={{ backgroundImage: `url(${imageAppPath})` }} />
                        <div className="PortfolioListItemTemplateFrameworkPic" style={{ backgroundImage: `url(${imageFrameworkPath})` }} />
                    </div>
                    <div className="PortfolioListItemTemplateTags">
                        <div className="PortfolioListItemTemplateWorkingType">
                            <p>{workingType}</p>
                        </div>
                    </div>
                </div>
                <div className="PortfolioListItemTemplateTopic">
                    <p className="PortfolioListItemTemplateAppName">{appName}</p>
                    <p className="PortfolioListItemTemplateFrameworkName">[{framework}]</p>
                </div>
                <div>
                    <p>
                        <span className="PortfolioListItemTemplateExplanationTitle">Description: </span>
                        <span>{description}</span>
                    </p>
                    <p>
                        <span className="PortfolioListItemTemplateExplanationTitle">Number of dev members: </span>
                        <span>{numberOfDevMembers}</span>
                    </p>
                    <p>
                        <span className="PortfolioListItemTemplateExplanationTitle">Learned Skill: </span>
                    </p>
                    {this.renderLearnedSkill(learnedSkills)}
                </div>
            </div>
        )
    }
}

export default PortfolioListItemTemplate;
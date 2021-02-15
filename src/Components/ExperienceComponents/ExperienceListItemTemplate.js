import React, { Component } from "react";

class ExperienceListItemTemplate extends Component {
    constructor(props) {
        super(props);

    }

    renderDetails(details, factor) {
        return (
            details.map((detail) => {
                return (
                    <p key={detail} style={{ fontSize: 16 * factor }}>
                        <span>- </span>
                        <span>{detail}</span>
                    </p>
                )
            })
        )
    }

    render() {
        const { companyName, Duration, workExperience, position, description, details, imageCompanyPath, windowWidth, factor } = this.props;
        const windowWidthHalf = windowWidth / 2;
        return (
            <div className="ExperienceListItemTemplate" >
                <div className="ExperienceListItemTemplateImage" style={{ width: windowWidth * 0.9, height: 250 * factor }}>
                    <div className="ExperienceListItemTemplateLongBlock" style={{ height: 20 * factor }} />
                    <div className="ExperienceListItemTemplateTimeline" style={{ width: 20*factor, left: 15*factor }} />
                    <div className="ExperienceListItemTemplatePoint" style={{ width: 50*factor, height: 50*factor }} />
                    <p className="ExperienceListItemTemplateDuration" style={{ fontSize: 16 * factor }}>{Duration}</p>
                    <div className="ExperienceListItemTemplateCompanyImage" style={{ height: 170 * factor, width: 170 * factor, borderWidth: 12 * factor }}>
                        <div className="ExperienceListItemTemplateCompanyImage2" style={{ borderWidth: 6*factor }}>
                            <img src={imageCompanyPath} />
                        </div>
                    </div>
                </div>
                <div className="ExperienceListItemTemplateTextTimeline">
                    <div className="ExperienceListItemTemplateTimeline2" style={{ width: 20*factor, transform: `translateX(${15*factor}px)`  }} />
                    <div className="ExperienceListItemTemplateText">
                        <div className="ExperienceListItemTemplateText2" style={{ paddingLeft: 50 * factor, paddingRight: 50 * factor }}>
                            <div className="ExperienceListItemTemplateTopic">
                                <p className="ExperienceListItemTemplateCompanyName" style={{ fontSize: 22 * factor }}>{companyName}</p>
                                <p className="ExperienceListItemTemplateWorkExperience" style={{ fontSize: 18 * factor }}>[{workExperience}]</p>
                            </div>
                            <div className="ExperienceListItemTemplateExplanation">
                                <p style={{ fontSize: 16 * factor }}>
                                    <span className="ExperienceListItemTemplateExplanationTitle">Position: </span>
                                    <span>{position}</span>
                                </p>
                                <p style={{ fontSize: 16 * factor }}>
                                    <span className="ExperienceListItemTemplateExplanationTitle">Description: </span>
                                    <span>{description}</span>
                                </p>
                                <p style={{ fontSize: 16 * factor }}>
                                    <span className="ExperienceListItemTemplateExplanationTitle">Details: </span>
                                </p>
                                {this.renderDetails(details, factor)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExperienceListItemTemplate;
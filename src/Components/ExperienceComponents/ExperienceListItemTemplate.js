import React, { Component } from "react";

class ExperienceListItemTemplate extends Component {
    constructor(props) {
        super(props);

    }

    renderDetails(details) {
        return(
            details.map( (detail) => {
                return(
                    <p key={detail}>
                        <span>- </span>
                        <span>{detail}</span>
                    </p>
                )
            })
        )
    }

    render() {
        const { companyName, Duration, workExperience, position, description, details, imageCompanyPath, windowWidth } = this.props;
        const windowWidthHalf = windowWidth / 2;
        return (
            <div className="ExperienceListItemTemplate">
                <div className="ExperienceListItemTemplateImage" style={{ width: windowWidthHalf }}>
                    {companyName && <div className="ExperienceListItemTemplateCompanyFrame" style={{ backgroundImage: `url("/webresume/images/CompanyFrame.png")` }} />}
                    <div className="ExperienceListItemTemplateLongBlock" />
                    <p className="ExperienceListItemTemplateDuration">{Duration}</p>
                    {companyName && <div className="ExperienceListItemTemplateCompanyImage">
                        <img src={imageCompanyPath} />
                    </div>}
                </div>
                <div className="ExperienceListItemTemplateTopic">
                    <p className="ExperienceListItemTemplateCompanyName">{companyName}</p>
                    {workExperience && <p className="ExperienceListItemTemplateWorkExperience">[{workExperience}]</p>}
                </div>
                <div className="ExperienceListItemTemplateExplanation">
                    <p>
                        <span className="ExperienceListItemTemplateExplanationTitle">Position: </span>
                        <span>{position}</span>
                    </p>
                    <p>
                        <span className="ExperienceListItemTemplateExplanationTitle">Description: </span>
                        <span>{description}</span>
                    </p>
                    <p>
                        <span className="ExperienceListItemTemplateExplanationTitle">Details: </span>                       
                    </p>
                    {this.renderDetails(details)}
                </div>
            </div>
        )
    }
}

export default ExperienceListItemTemplate;
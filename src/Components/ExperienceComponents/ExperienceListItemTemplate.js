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
        const { companyName, Duration, workExperience, position, description, details, imageCompanyPath } = this.props;
        const windowWidth = window.innerWidth;
        const windowWidthHalf = window.innerWidth / 2;
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBlock: 30, scrollSnapAlign: "center" }}>
                <div style={{ position: "relative", height: "300px", width: windowWidthHalf }}>
                    {companyName && <div style={{ backgroundImage: `url("/images/CompanyFrame.png")`, height: "300px", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />}
                    <div style={{ position: "absolute", left: 0, right: 0, top: 25, transform: `translateY(-50%)`, backgroundColor: "#FF0000", width: "100%", height: "20px" }} />
                    <p style={{ position: "absolute", textAlign: "center", left: 0, right: 0, top: 25, transform: `translateY(-50%)`, color: "white" }}>{Duration}</p>
                    {companyName && <div style={{ position: "absolute", left: "50%", bottom: "0%", transform: `translateX(-50%)`, height: "170px", width: "170px", borderRadius: "50%", overflow: "hidden", border: "15px solid transparent" }}>
                        <img src={imageCompanyPath} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>}
                </div>
                <div style={{ marginBlock: 5, display: "flex", flexDirection: "column", alignItems: "center", paddingInline: 30 }}>
                    <p style={{ fontSize: 24 }}>{companyName}</p>
                    {workExperience && <p style={{ fontSize: 18 }}>[{workExperience}]</p>}
                </div>
                <div style={{ paddingInline: 30}}>
                    <p>
                        <span style={{ color: "#FF0000", textTransform: "uppercase" }}>Position: </span>
                        <span>{position}</span>
                    </p>
                    <p>
                        <span style={{ color: "#FF0000", textTransform: "uppercase" }}>Description: </span>
                        <span>{description}</span>
                    </p>
                    <p>
                        <span style={{ color: "#FF0000", textTransform: "uppercase" }}>Details: </span>                       
                    </p>
                    {this.renderDetails(details)}
                </div>
                {/* <p style={{ fontSize: 14, marginBlock: 5, paddingInline: 30 }}>{detail}</p> */}
            </div>
        )
    }
}

export default ExperienceListItemTemplate;
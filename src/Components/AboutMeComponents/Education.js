import React, { Component } from "react";
import CardTemplate from "../General/CardTemplate.js";
import COLORS from "../../StaticVariable/Colors.js";

class Education extends Component {
    render() {
        const { factor } = this.props;
        return (
            <CardTemplate title="Education" factor={factor}>
                <div className="AboutMeEducation">
                    <div className="AboutMeEducation2" style={{ paddingLeft: 40*factor}}>
                        <div className="AboutMeEducationImage">
                            <img src="/webresume/images/Chula_logo.png" style={{ height: 80*factor}} />
                        </div>
                        <div className="AboutMeEducationExplanation">
                            <p className="AboutMeEducationName" style={{ fontSize: 24*factor }}>Chulalongkorn University</p>
                            <p className="AboutMeEducationDetails" style={{ fontSize: 18*factor }}>Becherlor's Degree in Eletrical Engineering</p>
                            <p className="AboutMeEducationDetails" style={{ fontSize: 18*factor }}>Second Class Honors [GPAX: 3.28]</p>
                        </div>
                        <div className="AboutMeEducationImage2">
                            <img src="/webresume/images/NTUN_logo.jpg" style={{ height: 90*factor}}/>
                        </div>
                        <div className="AboutMeEducationExplanation2">
                            <p className="AboutMeEducationName2" style={{ fontSize: 24*factor }}>Nawaminthrachinuthit Triamudomsuksanomklao school</p>
                            <p className="AboutMeEducationDetails2" style={{ fontSize: 18*factor }}>Science and Mathematics program</p>
                        </div>
                    </div>
                </div>
            </CardTemplate>
        )
    }
}

export default Education;
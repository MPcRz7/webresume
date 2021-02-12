import React, { Component } from "react";
import CardTemplate from "../General/CardTemplate.js";
import COLORS from "../../StaticVariable/Colors.js";

class Education extends Component {
    render() {
        return (
            <CardTemplate title="Education" >
                <div className="AboutMeEducation">
                    <div className="AboutMeEducation2">
                        <div className="AboutMeEducationImage">
                            <img src="/webresume/images/Chula_logo.png" />
                        </div>
                        <div className="AboutMeEducationExplanation">
                            <p className="AboutMeEducationName">Chulalongkorn University</p>
                            <p className="AboutMeEducationDetails">Becherlor's Degree in Eletrical Engineering</p>
                            <p className="AboutMeEducationDetails">Second Class Honors [GPAX: 3.28]</p>
                        </div>
                        <div className="AboutMeEducationImage2">
                            <img src="/webresume/images/NTUN_logo.jpg" />
                        </div>
                        <div className="AboutMeEducationExplanation2">
                            <p className="AboutMeEducationName2">Nawaminthrachinuthit Triamudomsuksanomklao school</p>
                            <p className="AboutMeEducationDetails2">Science and Mathematics program</p>
                        </div>
                    </div>
                </div>
            </CardTemplate>
        )
    }
}

export default Education;
import React, { Component } from "react";
import CardTemplate from "../General/CardTemplate.js";
import COLORS from "../../StaticVariable/Colors.js";

class Languages extends Component{
    render(){
        const { factor } = this.props;
        return(
            <CardTemplate title="Languages" factor={factor}>
                <div className="AboutMeLanguages">
                    <div className="AboutMeLanguages2" style={{ paddingLeft: 40*factor }}>
                        <div className="AboutMeLanguagesFlag" style={{ gridRow: "1", gridColumn: "1" }}>
                            <img src="/webresume/images/Thailand_flag.png" style={{ height: 50*factor }} />
                        </div>
                        <div className="AboutMeLanguagesLanguage" style={{ gridRow: "1", gridColumn: "2" }}>
                            <p style={{ fontSize: 24*factor }}>Thai</p>
                        </div>
                        <div className="AboutMeLanguagesExplanation" style={{ gridRow: "1", gridColumn: "3" }}>
                            <p className="AboutMeLanguagesLevel" style={{ fontSize: 24*factor }}>Native</p>
                        </div>
                        <div className="AboutMeLanguagesFlag" style={{ gridRow: "2", gridColumn: "1" }}>
                            <img src="/webresume/images/UK_flag.png" style={{ height: 50*factor }}/>
                        </div>
                        <div className="AboutMeLanguagesLanguage" style={{ gridRow: "2", gridColumn: "2" }}>
                            <p style={{ fontSize: 24*factor }}>English</p>
                        </div>
                        <div className="AboutMeLanguagesExplanation" style={{ gridRow: "2", gridColumn: "3" }}>
                            <p className="AboutMeLanguagesLevel" style={{ fontSize: 24*factor }}>Intermediate</p>
                            <p className="AboutMeLanguagesPoint" style={{ fontSize: 18*factor }}>[TOEIC: 670 3 years ago]</p>
                        </div>
                        <div className="AboutMeLanguagesFlag" style={{ gridRow: "3", gridColumn: "1" }}>
                            <img src="/webresume/images/Japan_flag.png" style={{ height: 50*factor }}/>
                        </div>
                        <div className="AboutMeLanguagesLanguage" style={{ gridRow: "3", gridColumn: "2" }}>
                            <p style={{ fontSize: 24*factor }}>Japanese</p>
                        </div>
                        <div className="AboutMeLanguagesExplanation" style={{ gridRow: "3", gridColumn: "3" }}>
                            <p className="AboutMeLanguagesLevel" style={{ fontSize: 24*factor }}>Basic</p>
                            <p className="AboutMeLanguagesPoint" style={{ fontSize: 18*factor }}>[JLPT: N4]</p>
                        </div>
                    </div>
                </div>
            </CardTemplate>
        )
    }
}

export default Languages;
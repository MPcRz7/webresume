import React, { Component } from "react";
import CardTemplate from "../General/CardTemplate.js";
import COLORS from "../../StaticVariable/Colors.js";

class Languages extends Component{
    render(){
        return(
            <CardTemplate title="Languages">
                <div className="AboutMeLanguages">
                    <div className="AboutMeLanguages2">
                        <div className="AboutMeLanguagesFlag" style={{ gridRow: "1", gridColumn: "1" }}>
                            <img src="/webresume/images/Thailand_flag.png" />
                        </div>
                        <div className="AboutMeLanguagesLanguage" style={{ gridRow: "1", gridColumn: "2" }}>
                            <p>Thai</p>
                        </div>
                        <div className="AboutMeLanguagesExplanation" style={{ gridRow: "1", gridColumn: "3" }}>
                            <p className="AboutMeLanguagesLevel">Native</p>
                        </div>
                        <div className="AboutMeLanguagesFlag" style={{ gridRow: "2", gridColumn: "1" }}>
                            <img src="/webresume/images/UK_flag.png" />
                        </div>
                        <div className="AboutMeLanguagesLanguage" style={{ gridRow: "2", gridColumn: "2" }}>
                            <p >English</p>
                        </div>
                        <div className="AboutMeLanguagesExplanation" style={{ gridRow: "2", gridColumn: "3" }}>
                            <p className="AboutMeLanguagesLevel">Intermediate</p>
                            <p className="AboutMeLanguagesPoint">[TOEIC: 670 3 years ago]</p>
                        </div>
                        <div className="AboutMeLanguagesFlag" style={{ gridRow: "3", gridColumn: "1" }}>
                            <img src="/webresume/images/Japan_flag.png" />
                        </div>
                        <div className="AboutMeLanguagesLanguage" style={{ gridRow: "3", gridColumn: "2" }}>
                            <p>Japanese</p>
                        </div>
                        <div className="AboutMeLanguagesExplanation" style={{ gridRow: "3", gridColumn: "3" }}>
                            <p className="AboutMeLanguagesLevel" >Basic</p>
                            <p className="AboutMeLanguagesPoint">[JLPT: N4]</p>
                        </div>
                    </div>
                </div>
            </CardTemplate>
        )
    }
}

export default Languages;
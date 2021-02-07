import React, { Component } from "react";
import CardTemplate from "../General/CardTemplate.js";
import COLORS from "../../StaticVariable/Colors.js";

class Languages extends Component{
    render(){
        return(
            <CardTemplate title="Languages">
                <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", gridTemplateRows: "1fr 1fr 1fr", gap: 30, paddingInlineStart: 40 }}>
                        <div style={{ gridRow: "1", gridColumn: "1", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src="/webresume/images/Thailand_flag.png" style={{ height: "50px"}} />
                        </div>
                        <div style={{ gridRow: "1", gridColumn: "2", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <p style={{ fontSize: 24, textTransform: "uppercase", color: COLORS.Red, paddingBlock: 5 }}>Thai</p>
                        </div>
                        <div style={{ gridRow: "1", gridColumn: "3", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <p style={{ fontSize: 24 }}>Native</p>
                        </div>
                        <div style={{ gridRow: "2", gridColumn: "1", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src="/webresume/images/UK_flag.png" style={{ height: "50px" }} />
                        </div>
                        <div style={{ gridRow: "2", gridColumn: "2", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <p style={{ fontSize: 24, textTransform: "uppercase", color: COLORS.Red, paddingBlock: 5 }}>English</p>
                        </div>
                        <div style={{ gridRow: "2", gridColumn: "3", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <p style={{ fontSize: 24 }}>Intermediate</p>
                            <p style={{ fontSize: 18 }}>[TOEIC: 670 3 years ago]</p>
                        </div>
                        <div style={{ gridRow: "3", gridColumn: "1", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src="/webresume/images/Japan_flag.png" style={{ height: "50px" }} />
                        </div>
                        <div style={{ gridRow: "3", gridColumn: "2", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <p style={{ fontSize: 24, textTransform: "uppercase", color: COLORS.Red, paddingBlock: 5 }}>Japanese</p>
                        </div>
                        <div style={{ gridRow: "3", gridColumn: "3", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <p style={{ fontSize: 24 }}>Basic</p>
                            <p style={{ fontSize: 18 }}>[JLPT: N4]</p>
                        </div>
                    </div>
                </div>
            </CardTemplate>
        )
    }
}

export default Languages;
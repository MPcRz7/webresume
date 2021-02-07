import React, { Component } from "react";
import CardTemplate from "../General/CardTemplate.js";
import COLORS from "../../StaticVariable/Colors.js";

class Education extends Component {
    render() {
        return (
            <CardTemplate title="Education" >
                <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gridTemplateRows: "1fr 1fr", gap: 30, paddingInlineStart: 40 }}>
                        <div style={{ gridRow: "1", gridColumn: "1", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src="/images/Chula_logo.png" style={{ height: "80px"}} />
                        </div>
                        <div style={{ gridRow: "1", gridColumn: "2" }}>
                            <p style={{ fontSize: 24, textTransform: "uppercase", color: COLORS.Red, paddingBlock: 5 }}>Chulalongkorn University</p>
                            <p style={{ fontSize: 18 }}>Becherlor's Degree in Eletrical Engineering</p>
                            <p style={{ fontSize: 18 }}>Second Class Honors [GPAX: 3.28]</p>
                        </div>
                        <div style={{ gridRow: "2", gridColumn: "1", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src="/images/NTUN_logo.jpg" style={{ height: "90px" }} />
                        </div>
                        <div style={{ gridRow: "2", gridColumn: "2" }}>
                            <p style={{ fontSize: 24, textTransform: "uppercase", color: COLORS.Red, paddingBlock: 5 }}>Nawaminthrachinuthit Triamudomsuksanomklao school</p>
                            <p style={{ fontSize: 18 }}>Science and Mathematics program</p>
                        </div>
                    </div>
                </div>
            </CardTemplate>
        )
    }
}

export default Education;
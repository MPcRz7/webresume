import React, { Component } from "react";
import COLORS from "../../StaticVariable/Colors.js";

class Profile extends Component{
    render(){
        return(
            <div style={{ height: "200px", backgroundColor: COLORS.AlmostBlack, width: "100%" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", height: "100%", paddingInlineStart: 40, paddingInlineEnd: 40 }}>
                    <div style={{ gridColumn: "1", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div style={{ width: "140px", height: "140px", backgroundPosition: "center", backgroundSize: "cover", backgroundColor: "white", border: "3px solid red", borderRadius: "50%", overflow: "hidden" }}>
                            <img src="/webresume/images/MosProfile_1.png" style={{ width: "100%", height: "100%", objectFit: "cover"}} />
                        </div>
                    </div>
                    <div style={{ gridColumn: "2", paddingBlockStart: 20, paddingBlockEnd: 10, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <p style={{ fontSize: 48, color: COLORS.White }}>Purachet Ruangtanasak</p>
                        <p style={{ fontSize: 24, color: COLORS.White }}>Mobile Application Developer</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
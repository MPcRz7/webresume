import React, { Component } from "react";
import COLORS from "../../StaticVariable/Colors.js";

class Footer extends Component {
    render() {
        return (
            <div style={{ backgroundColor: COLORS.Black, display: "flex", justifyContent: "space-evenly", alignItems: "center", paddingInline: 30, paddingBlock: 50 }}>
                <div>
                    <p style={{ color: COLORS.Red, textTransform: "uppercase", fontSize: 36 }}>Contact me</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="/images/mail_FFFFFF_48.png" style={{ height: "40px", marginInline: 10 }} />
                    <p style={{ color: COLORS.White, fontSize: 20 }}>mos.ruangtanasak@gmail.com</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="/images/iphone_FFFFFF_60.png" style={{ height: "40px", marginInline: 10 }} />
                    <p style={{ color: COLORS.White, fontSize: 20 }}>0875971249</p>
                </div>
            </div>
        )
    }
}

export default Footer;
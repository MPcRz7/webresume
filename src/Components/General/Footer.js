import React, { Component } from "react";
import COLORS from "../../StaticVariable/Colors.js";

class Footer extends Component {
    render() {
        const { footerHeight } = this.props;
        return (
            <div style={{ backgroundColor: COLORS.Black, display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%", height: footerHeight }}>
                <div>
                    <p style={{ color: COLORS.Red, textTransform: "uppercase", fontSize: 36 }}>Contact me</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="/webresume/images/mail_FFFFFF_48.png" style={{ height: "40px", marginInlineStart: 10, marginInlineEnd: 10 }} />
                    <p style={{ color: COLORS.White, fontSize: 20 }}>mos.ruangtanasak@gmail.com</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="/webresume/images/iphone_FFFFFF_60.png" style={{ height: "40px", marginInlineStart: 10, marginInlineEnd: 10 }} />
                    <p style={{ color: COLORS.White, fontSize: 20 }}>0875971249</p>
                </div>
            </div>
        )
    }
}

export default Footer;
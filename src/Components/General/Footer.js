import React, { Component } from "react";
import COLORS from "../../StaticVariable/Colors.js";

class Footer extends Component {

    renderFooter() {
        const { footerHeight, windowWidth } = this.props;
        if (windowWidth >= 950) {
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
        } else {
            return (
                <div style={{ backgroundColor: COLORS.Black, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <div style={{ padding: 30 }}>
                        <div style={{ paddingBlockStart: 30, paddingBlockEnd: 30}}>
                            <p style={{ color: COLORS.Red, textTransform: "uppercase", fontSize: 36 }}>Contact me</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", paddingBlockStart: 10, paddingBlockEnd: 10 }}>
                            <img src="/webresume/images/mail_FFFFFF_48.png" style={{ height: "40px", marginInlineStart: 10, marginInlineEnd: 10 }} />
                            <p style={{ color: COLORS.White, fontSize: 20 }}>mos.ruangtanasak@gmail.com</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", paddingBlockStart: 10, paddingBlockEnd: 10 }}>
                            <img src="/webresume/images/iphone_FFFFFF_60.png" style={{ height: "40px", marginInlineStart: 10, marginInlineEnd: 10 }} />
                            <p style={{ color: COLORS.White, fontSize: 20 }}>0875971249</p>
                        </div>
                    </div>
                </div>
            )
        }

    }

    render() {
        return (
            <div>
                {this.renderFooter()}
            </div>
        )
    }
}

export default Footer;
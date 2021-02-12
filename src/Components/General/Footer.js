import React, { Component } from "react";
import COLORS from "../../StaticVariable/Colors.js";

class Footer extends Component {

    renderFooter() {
        const { footerHeight, windowWidth, factor } = this.props;
        if (windowWidth >= 1100) {
            return (
                <div className="renderFullFooter" style={{ height: footerHeight }}>
                    <div className="FooterFullContactMe">
                        <p style={{ fontSize: 36*factor }}>Contact me</p>
                    </div>
                    <div className="FooterFullEmail">
                        <img src="/webresume/images/mail_FFFFFF_48.png" style={{ height: 40*factor }}/>
                        <p style={{ fontSize: 20*factor }}>mos.ruangtanasak@gmail.com</p>
                    </div>
                    <div className="FooterFullPhone">
                        <img src="/webresume/images/iphone_FFFFFF_60.png" style={{ height: 40*factor }}/>
                        <p style={{ fontSize: 20*factor }}>0875971249</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="renderSmallFooter" >
                    <div className="renderSmallFooter2">
                        <div className="FooterSmallContactMe">
                            <p style={{ fontSize: 36*factor }}>Contact me</p>
                        </div>
                        <div className="FooterSmallEmail">
                            <img src="/webresume/images/mail_FFFFFF_48.png" style={{ height: 40*factor }} />
                            <p style={{ fontSize: 20*factor }}>mos.ruangtanasak@gmail.com</p>
                        </div>
                        <div className="FooterSmallPhone">
                            <img src="/webresume/images/iphone_FFFFFF_60.png" style={{ height: 40*factor }}/>
                            <p style={{ fontSize: 20*factor }}>0875971249</p>
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
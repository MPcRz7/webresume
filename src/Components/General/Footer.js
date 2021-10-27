import React, { Component } from "react";
import COLORS from "../../StaticVariable/Colors.js";

import Summary from "../../Components/AboutMeComponents/Summary.js";

class Footer extends Component {

    renderFooter() {
        const { footerHeight, windowWidth, factor } = this.props;
        if (windowWidth >= 1100) {
            return (
                <div className="renderFullFooter" style={{ height: footerHeight }}>
                    <div className="FooterFullContactMe">
                        <p style={{ fontSize: 36 * factor }}>Contact me</p>
                    </div>
                    <div>
                        <a href="mailto:mos.ruangtanasak@gmail.com" className="FooterFullEmail">
                            <img src="/webresume/images/mail_FFFFFF_48.png" style={{ height: 40 * factor }} />
                            <p style={{ fontSize: 24 * factor }}>mos.ruangtanasak@gmail.com</p>
                        </a>
                    </div>
                    <div>
                        <a href="tel:0875971249" className="FooterFullPhone">
                            <img src="/webresume/images/iphone_FFFFFF_60.png" style={{ height: 40 * factor }} />
                            <p style={{ fontSize: 24 * factor }}>0875971249</p>
                        </a>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="renderFullFooter" style={{ height: footerHeight }}>
                        <div className="FooterFullContactMe">
                            <p style={{ fontSize: 36 * factor }}>Contact me</p>
                        </div>
                        <div>
                            <a href="mailto:mos.ruangtanasak@gmail.com" className="FooterFullEmail">
                                <img src="/webresume/images/mail_FFFFFF_48.png" style={{ height: 40 * factor }} />
                                <p style={{ fontSize: 24 * factor }}>mos.ruangtanasak@gmail.com</p>
                            </a>
                        </div>
                        <div>
                            <a href="tel:0875971249" className="FooterFullPhone">
                                <img src="/webresume/images/iphone_FFFFFF_60.png" style={{ height: 40 * factor }} />
                                <p style={{ fontSize: 24 * factor }}>0875971249</p>
                            </a>
                        </div>
                    </div>
                    <div className="FooterExtension">
                        <div className="FooterExtension2">
                            <div className="FooterExtensionAboutMeSummary">
                                <p className="FooterExtensionAboutMeSummaryHeadTopic" style={{ fontSize: 30 * factor }}>Summary about me</p>
                            </div>
                            <div className="FooterExtensionAboutMeSummary">
                                <p className="FooterExtensionAboutMeSummaryTopic" style={{ fontSize: 24 * factor }}>Experience</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>4 years of experience about programming relate job.</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>- 2 years of experience in Software Engineer.</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>- 2 years of experience in Mobile Application Developer.</p>
                            </div>
                            <div className="FooterExtensionAboutMeSummary">
                                <p className="FooterExtensionAboutMeSummaryTopic" style={{ fontSize: 24 * factor }}>Application Project</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>8 applications project experience.</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>- 5 mobile application projects for company job.</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>- 1 mobile application project for self learning.</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>- 1 mobile application project for freelance job.</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>- 1 web application project for self learning.</p>
                            </div>
                            <div className="FooterExtensionAboutMeSummary">
                                <p className="FooterExtensionAboutMeSummaryTopic" style={{ fontSize: 24 * factor }}>Short Target</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>Want to be a full stack developer.</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>- Be able to resolve more complicated Frontend requirement.</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>- Learn and get more experience about Backend development.</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>- Be able to take responsibility for whole application development.</p>
                            </div>
                            <div className="FooterExtensionAboutMeSummary">
                                <p className="FooterExtensionAboutMeSummaryTopic" style={{ fontSize: 24 * factor }}>Personality</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>- Challenging.</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>- High passion.</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>- Always improve myself and self learning.</p>
                                <p style={{ fontSize: 24 * factor, color: "#FFFFFF" }}>- Happy to communicate with people.</p>
                            </div>
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
import React, { Component } from "react";
import useWindowSize from "../Handler/WindowSize.js";
import LayoutTemplate from "../Components/General/LayoutTemplate.js";
import Profile from "../Components/AboutMeComponents/Profile.js";
import Summary from "../Components/AboutMeComponents/Summary.js";
import Education from "../Components/AboutMeComponents/Education.js";
import Languages from "../Components/AboutMeComponents/Languages.js";
import COLORS from "../StaticVariable/Colors.js";

const AboutMePage = () => {

    const [windowHeight, windowWidth] = useWindowSize();
    const headerHeight = 120;
    const footerHeight = 145;
    const bodyHeight = windowHeight - headerHeight - footerHeight;
    return (
        <body className="aboutme">
            <LayoutTemplate headerHeight={headerHeight} footerHeight={footerHeight} bodyHeight={bodyHeight}>
                <div style={{ width: windowWidth }}>
                    <Profile />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 50, paddingBlock: 50, paddingInline: 100, backgroundColor: COLORS.Grey }}>
                        <div style={{ gridRow: "1 / span 2", gridColumn: "1" }}>
                            <Summary />
                        </div>
                        <div style={{ gridRow: "1", gridColumn: "2" }}>
                            <Education />
                        </div>
                        <div style={{ gridRow: "2", gridColumn: "2" }}>
                            <Languages />
                        </div>
                    </div>
                </div>
            </LayoutTemplate>
        </body>
    )
}

// class AboutMePage extends Component {
//     render() {
//         return (
//             <body className="aboutme">
//                 <LayoutTemplate>
//                     <div>
//                         <Profile />
//                         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 50, paddingBlock: 50, paddingInline: 100, backgroundColor: COLORS.Grey, height: "800px" }}>
//                             <div style={{ gridRow: "1 / span 2", gridColumn: "1" }}>
//                                 <Summary />
//                             </div>
//                             <div style={{ gridRow: "1", gridColumn: "2" }}>
//                                 <Education />
//                             </div>
//                             <div style={{ gridRow: "2", gridColumn: "2" }}>
//                                 <Languages />
//                             </div>
//                         </div>
//                     </div>
//                 </LayoutTemplate>
//             </body>
//         )
//     }
// }

export default AboutMePage;
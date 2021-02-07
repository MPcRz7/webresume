import React, { Component } from "react";
import LayoutTemplate from "../Components/General/LayoutTemplate.js";
import ExperienceListItemTemplate from "../Components/ExperienceComponents/ExperienceListItemTemplate.js";
import axios from "axios";

class ExperiencePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // companies: [
            //     // { companyName: "55", workDuration: "", workExperience: "", detail: "", imageCompanyPath: "" },
            //     { companyName: "This is digital media group", workDuration: "2019-2020", workExperience: "1 year 2 months", detail: "About Mos is created for web application development practice. It also can use as a resume for apply the job in the future.", imageCompanyPath: "/images/ThisIsDMG_logo.png" },
            //     { companyName: "Toyota Tsusho Denso Electronics Thailand", workDuration: "2017-2019", workExperience: "2 years 1 month", detail: "About Mos is created for web application development practice. It also can use as a resume for apply the job in the future.", imageCompanyPath: "/images/TDET_logo.png" },
            //     { companyName: "Toyota Tsusho Denso Electronics Thailand2", workDuration: "2017-2019", workExperience: "2 years 1 month", detail: "About Mos is created for web application development practice. It also can use as a resume for apply the job in the future.", imageCompanyPath: "/images/ReactJS.png" },
            //     { companyName: "Toyota Tsusho Denso Electronics Thailand3", workDuration: "2017-2019", workExperience: "2 years 1 month", detail: "About Mos is created for web application development practice. It also can use as a resume for apply the job in the future.", imageCompanyPath: "/images/ReactJS.png" },
            //     { companyName: "Toyota Tsusho Denso Electronics Thailand4", workDuration: "2017-2019", workExperience: "2 years 1 month", detail: "About Mos is created for web application development practice. It also can use as a resume for apply the job in the future.", imageCompanyPath: "/images/ReactJS.png" },
            //     // { companyName: "55", workDuration: "", workExperience: "", detail: "", imageCompanyPath: "" },
            // ]
            experiences: []
        }
    }

    componentDidMount(){
        const userId = 1;
        axios.get("http://localhost:3001/experiences/" + userId).then(res => {
            this.setState({ experiences : res.data.userExperiences });
        })
    }

    renderCompanies() {
        return (
            this.state.experiences.map((experience) => {
                return (
                    <div key={experience.id}>
                        <ExperienceListItemTemplate {...experience} />
                    </div>
                )
            })
        )
    }

    render() {
        const windowWidth = window.innerWidth;
        return (
            <body className="experience">
                <LayoutTemplate>
                    <div style={{ display: "flex", width: windowWidth, position: "relative", overflowX: "scroll", scrollSnapType: "x" }}>
                        {this.renderCompanies()}
                    </div>
                </LayoutTemplate>
            </body>
        )

    }
}

export default ExperiencePage;
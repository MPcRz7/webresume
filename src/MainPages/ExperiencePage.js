import React, { Component, useState, useEffect } from "react";
import useWindowSize from "../Handler/WindowSize.js";
import LayoutTemplate from "../Components/General/LayoutTemplate.js";
import ExperienceListItemTemplate from "../Components/ExperienceComponents/ExperienceListItemTemplate.js";
import axios from "axios";
import resumeData from "../LocalData/resumeData.json";

const ExperiencePage = () => {

    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const userId = 1;
        // axios.get(process.env.REACT_APP_API_URL + "/experiences/" + userId).then(res => {
        //     setExperiences(res.data.userExperiences);
        // })
        setExperiences(resumeData.experiences.find(_ => _.id == userId).userExperiences);
    }, []);

    const renderCompanies = () => {
        return (
            experiences.map((experience) => {
                return (
                    <div key={experience.id}>
                        <ExperienceListItemTemplate {...experience} />
                    </div>
                )
            })
        )
    }

    const [windowHeight, windowWidth] = useWindowSize();
    const headerHeight = 120;
    const footerHeight = 145;
    const bodyHeight = windowHeight - headerHeight - footerHeight;
    return (
        <body className="experience">
            <LayoutTemplate headerHeight={headerHeight} footerHeight={footerHeight} bodyHeight={bodyHeight}>
                <div style={{ display: "flex", width: windowWidth, position: "relative", overflowX: "scroll", scrollSnapType: "x" }}>
                    {renderCompanies()}
                </div>
            </LayoutTemplate>
        </body>
    )

}

export default ExperiencePage;
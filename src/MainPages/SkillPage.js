import React, { Component, useState, useEffect } from "react";
import useWindowSize from "../Handler/WindowSize.js";
import axios from "axios";
import HorizontalScroll from "react-scroll-horizontal";
import Dimensions from "react-dimensions";
import LayoutTemplate from "../Components/General/LayoutTemplate.js";
import SkillListItemTemplate from "../Components/SkillComponents/SkillListItemTemplate.js";
import resumeData from "../LocalData/resumeData.json";

const SkillPage = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const userId = 1;
        // axios.get(process.env.REACT_APP_API_URL + "/skills/" + userId).then(res => {
        //     setSkills(res.data.userSkills)
        // })
        setSkills(resumeData.skills.find(_ => _.id == userId).userSkills);
    }, []);

    const renderItems = (items) => {
        return (
            items.map((item) => {
                return (
                    <SkillListItemTemplate key={item.id} {...item} />
                )
            })
        )
    }

    const renderCategories = () => {
        return (
            skills.map((skill) => {
                return (
                    <div key={skill.id} style={{ padding: 30 }}>
                        <p style={{ fontSize: 24, paddingBlockStart: 10, paddingBlockEnd: 10 }}>{skill.category}</p>
                        <div style={{ display: "flex", width: window.innerWidth, overflowX: "scroll", position: "relative" }}>
                            {renderItems(skill.items)}
                        </div>
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
        <body className="skill">
            <LayoutTemplate headerHeight={headerHeight} footerHeight={footerHeight} bodyHeight={bodyHeight}>
                <div>{renderCategories()}</div>
            </LayoutTemplate>
        </body>
    )
}

export default SkillPage;
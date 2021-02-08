import React, { Component } from "react";
import LayoutTemplate from "../Components/General/LayoutTemplate.js";
import ExperienceListItemTemplate from "../Components/ExperienceComponents/ExperienceListItemTemplate.js";
import axios from "axios";
import resumeData from "../LocalData/resumeData.json";

class ExperiencePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            experiences: []
        }
    }

    componentDidMount(){
        const userId = 1;
        // axios.get(process.env.REACT_APP_API_URL + "/experiences/" + userId).then(res => {
        //     this.setState({ experiences : res.data.userExperiences });
        // })
        this.setState({ experiences : resumeData.experiences.find(_=>_.id == userId).userExperiences });
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
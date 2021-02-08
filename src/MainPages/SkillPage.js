import React, { Component } from "react";
import axios from "axios";
import HorizontalScroll from "react-scroll-horizontal";
import Dimensions from "react-dimensions";
import LayoutTemplate from "../Components/General/LayoutTemplate.js";
import SkillListItemTemplate from "../Components/SkillComponents/SkillListItemTemplate.js";
import resumeData from "../LocalData/resumeData.json";



class SkillPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: []
        }
    }

    componentDidMount(){
        const userId = 1;
        // axios.get(process.env.REACT_APP_API_URL + "/skills/" + userId).then(res => {
        //     {this.setState ({ skills : res.data.userSkills })}
        // })
        this.setState({ skills : resumeData.skills.find(_=>_.id == userId).userSkills });
    }

    renderItems(items) {
        return (
            items.map((item) => {
                return (
                    <SkillListItemTemplate key={item.id} {...item} />
                )
            })
        )
    }

    renderCategories() {       
        return (
            this.state.skills.map((skill) => {
                return (
                    <div key={skill.id} style={{ padding: 20 }}>
                        <p style={{ fontSize: 24, paddingBlock: 10 }}>{skill.category}</p>
                        <div style={{ display: "flex", width: window.innerWidth, overflowX: "scroll", position: "relative" }}>
                            {this.renderItems(skill.items)}                          
                        </div>                     
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <body className="skill">
                <LayoutTemplate>
                    <div>{this.renderCategories()}</div>
                </LayoutTemplate>
            </body>
        )
    }
}

export default SkillPage;
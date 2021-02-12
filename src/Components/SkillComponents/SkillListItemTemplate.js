import React, { Component } from "react";

class SkillListItemTemplate extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { name, level, imagePath } = this.props;
        return (
            <div className="SkillListItemTemplate">
                <img src={imagePath} />
                <p className="skillName">{name}</p>
                <p className="skillLevel">[{level}]</p>
            </div>
        )
    }
}

export default SkillListItemTemplate;
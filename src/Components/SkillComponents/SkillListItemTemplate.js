import React, { Component } from "react";

class SkillListItemTemplate extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { name, level, imagePath, factor } = this.props;
        return (
            <div className="SkillListItemTemplate" style={{ width: 400*factor }}>
                <img src={imagePath} style={{ width: 400*factor }} />
                <p className="skillName" style={{ fontSize: 24*factor }}>{name}</p>
                <p className="skillLevel" style={{ fontSize: 18*factor }}>[{level}]</p>
            </div>
        )
    }
}

export default SkillListItemTemplate;
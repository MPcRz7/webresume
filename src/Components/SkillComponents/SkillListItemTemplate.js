import React, { Component } from "react";

class SkillListItemTemplate extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { name, level, imagePath } = this.props;
        return (
            <div style={{ width: "400px", display: "flex", flexDirection: "column", alignItems: "center", marginInlineEnd: 30 }}>
                <img src={imagePath} style={{ width: "400px" }} />
                <p style={{ fontSize: 24 }}>{name}</p>
                <p style={{ fontSize: 18 }}>[{level}]</p>
            </div>
        )
    }
}

export default SkillListItemTemplate;
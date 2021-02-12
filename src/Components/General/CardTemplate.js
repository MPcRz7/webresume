import React, { Component } from "react";
import COLORS from "../../StaticVariable/Colors.js";

class CardTemplate extends Component {
    render() {
        const { title = "Title", children, factor } = this.props;
        return (
            <div className="CardTemplate" style={{ width: 600 * factor }}>
                <div className="CardTemplate2">
                    <div className="CardTemplateTopic">
                        <p style={{ fontSize: 24 * factor }}>{title}</p>
                    </div>
                    <div className="CardTemplateBody">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardTemplate;
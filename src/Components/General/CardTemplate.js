import React, { Component } from "react";
import COLORS from "../../StaticVariable/Colors.js";

class CardTemplate extends Component {
    render() {
        const { title = "Title", children } = this.props;
        return (
            <div style={{ height: "100%", display: "flex" }}>
                <div style={{ borderRadius: 20, backgroundColor: COLORS.White, paddingBlock: 30, display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ backgroundColor: COLORS.Grey, paddingBlock: 10, paddingInline: 20, alignSelf: "flex-start" }}>
                        <p style={{ color: COLORS.Black, textTransform: "uppercase", textAlign: "center", fontSize: 24 }}>{title}</p>
                    </div>
                    <div style={{ padding: 20, flex: 1 }}>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardTemplate;
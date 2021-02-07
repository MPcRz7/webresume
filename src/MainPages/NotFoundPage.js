import React, { Component } from "react";
import LayoutTemplate from "../Components/General/LayoutTemplate.js";

class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <LayoutTemplate>
                    <div style={{ height: "550px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <p style={{ fontSize: 150 }}>404 Not found</p>
                    </div>
                </LayoutTemplate>
            </div>
        )
    }
}

export default NotFoundPage;
import React, { Component } from "react";
import COLORS from "../../StaticVariable/Colors.js";

class Profile extends Component{
    render(){
        const { factor } = this.props;
        return(
            <div className="AboutMeProfile" style={{ height: 200*factor }}>
                <div className="AboutMeProfile2">
                    <div className="AboutMeProfilePic">
                        <div className="AboutMeProfilePicMosPic" style={{ width: 140*factor, height: 140*factor }}>
                            <img src="/webresume/images/MosProfile_1.png" />
                        </div>
                    </div>
                    <div className="AboutMeProfileName">
                        <p className="AboutMeProfileFullName" style={{ fontSize: 48*factor }}>Purachet Ruangtanasak</p>
                        <p className="AboutMeProfilePosition" style={{ fontSize: 24*factor }}>Mobile Application Developer</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
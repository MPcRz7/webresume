import React, { Component } from "react";
import COLORS from "../../StaticVariable/Colors.js";

class Profile extends Component{
    render(){
        return(
            <div className="AboutMeProfile">
                <div className="AboutMeProfile2">
                    <div className="AboutMeProfilePic">
                        <div className="AboutMeProfilePicMosPic">
                            <img src="/webresume/images/MosProfile_1.png" />
                        </div>
                    </div>
                    <div className="AboutMeProfileName">
                        <p className="AboutMeProfileFullName">Purachet Ruangtanasak</p>
                        <p className="AboutMeProfilePosition">Mobile Application Developer</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
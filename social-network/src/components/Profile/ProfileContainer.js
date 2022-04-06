import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams, } from "react-router-dom";
import {profileAPI} from "../../api/api";

function withRouter(Component) {

    return function (props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                router={{location, navigate, params}}/>
        )
    }
}

class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.router.params.userId ? this.props.router.params.userId : 2;

        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);
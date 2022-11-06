import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMapMarkerAlt, faBirthdayCake, faCalendarAlt } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    console.log('rendering');
    console.log(profile);
    return (
        <>
            <h4>Profile</h4>
            <div className="border">
                <div className="row px-3">
                    <div className="col-1">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div className="col-10">
                        <span className="fw-bold">{profile.firstName} {profile.lastName}</span><br />
                        <span className="text-secondary">{profile.tuits} Tweets</span>
                    </div>
                </div>
                <div className="position-relative">
                    <div className="card">
                        <img src={profile.bannerPicture} />
                        <img src={profile.profilePicture} alt="avatar" className="h-50 rounded-circle card-img-overlay mt-5 top-50"></img>
                    </div>
                    <Link to="/tuiter/edit-profile" className="border rounded-pill fw-bold text-black float-right mt-2 me-3">
                        <span className="m-2">Edit profile</span>
                    </Link>
                </div>

                <div className="mt-5 px-3">
                    <span className="fw-bold">{profile.firstName} {profile.lastName}</span><br />
                    <span>{profile.handle}</span>
                </div>
                <div className="mt-3 px-3">
                    {profile.bio}
                </div>

                <div className="row mt-3 px-3">
                    <div className="col-4">
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;<span>{profile.location}</span>
                    </div>
                    <div className="col-4">
                        <FontAwesomeIcon icon={faBirthdayCake} /> &nbsp;
                        <span>Born {profile.dateOfBirth}</span>
                    </div>
                    <div className="col-4">
                        <FontAwesomeIcon icon={faCalendarAlt} /> &nbsp;
                        <span>Joined {profile.dateJoined}</span>
                    </div>
                </div>

                <div className="mt-3 px-3">
                    <span className="fw-bold">{profile.followingCount}</span> Following
                    <span className="fw-bold ms-4"> {profile.followersCount}</span> Followers
                </div>
            </div>
            <br/>
        </>
    );
};
export default ProfileComponent;
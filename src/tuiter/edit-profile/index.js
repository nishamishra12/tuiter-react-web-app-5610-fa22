import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { saveProfile } from "../reducers/profile-reducer";
import { useState } from "react";
import { Form, FloatingLabel, FormGroup, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);
    const dispatch = useDispatch();
    const [disableButton, setDisableButton] = useState(true)

    const saveClickHandler = () => {
        const updatedProfile = { ...profile, firstName, lastName, bio, location, website, dateOfBirth };
        dispatch(saveProfile(updatedProfile))
    }

    const cancelClickHandler = () => {
        const updatedProfile = { ...profile };
        dispatch(saveProfile(updatedProfile))
    }

    let navigate = useNavigate();
    const navigateToProfile = () => {
        navigate(`../profile`);
    }

    function myFunction() {
        document.getElementById("dob").focus();
    }

    return (
        <>
            <div className="border">
                <div className="m-2">
                    <i className="bi bi-x-lg float-start"
                        onClick={(event) => {
                            cancelClickHandler(event)
                            navigateToProfile()
                        }}></i>
                    <span className="fw-bold ms-4">Edit Profile</span>
                    <button className="border rounded-pill text-white bg-black float-right"
                        onClick={(event) => {
                            saveClickHandler(event)
                            navigateToProfile()
                        }}>Save
                    </button>
                    <div className="position-relative mt-3">
                        <img src={profile.bannerPicture} className="w-100" />
                        <img src={profile.profilePicture} alt="avatar" className="h-50 rounded-circle card-img-overlay mt-5 ms-3 top-50 border border-3 border-white"></img>
                    </div>

                    <div className="row mt-5">
                        <Form>
                            <FormGroup className="mt-3" controlId="formGroupName">
                                <FloatingLabel id="formName" label="Name">
                                    <FormControl type="input"
                                        defaultValue={profile.firstName + " " + profile.lastName}
                                        onChange={(event) => {
                                            setFirstName(event.target.value.split(" ")[0])
                                            setLastName(event.target.value.split(" ")[1])
                                        }}
                                    />
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup className="mt-3" controlId="formGroupName">
                                <FloatingLabel id="formName" label="Bio">
                                    <FormControl as="textarea" style={{height: '100%'}}
                                        defaultValue={profile.bio}
                                        onChange={(event) => {
                                            setBio(event.target.value)
                                        }}
                                    />
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup className="mt-3" controlId="formGroupName">
                                <FloatingLabel id="formName" label="Location">
                                    <FormControl type="input"
                                        defaultValue={profile.location}
                                        onChange={(event) => {
                                            setLocation(event.target.value)
                                        }}
                                    />
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup className="mt-3" controlId="formGroupName">
                                <FloatingLabel id="formName" label="Website">
                                    <FormControl type="input"
                                        defaultValue={profile.website}
                                        onChange={(event) => {
                                            setWebsite(event.target.value)
                                        }}
                                    />
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup className="mt-3" controlId="formGroupName">
                                <FloatingLabel id="formName" label="Birth Date">
                                    <FormControl type="input"
                                        defaultValue={profile.dateOfBirth}
                                        onChange={(event) => {
                                            setDateOfBirth(event.target.value)
                                        }}
                                    />
                                </FloatingLabel>
                            </FormGroup>
                        </Form>

                    </div>
                </div>

            </div>
        </>
    );
};
export default EditProfileComponent;
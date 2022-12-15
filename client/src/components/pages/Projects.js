import { useState, useEffect } from "react";
import React from "react";
import SingleProject from "../SingleProject";
import Auth from "../../utils/auth";
import "../../styles/projects.css"

export default function Dashboard() {
  const [allProjects, setAllProjects] = useState([]);
  const userProfile = Auth.getProfile();
  const userId = userProfile.data._id

  async function getProjects() {
    const response = await fetch(`/api/users/projects/${userId}`);
    const allProjects = await response.json();

    setAllProjects(allProjects.allProjects);
  };

  const [singleUser, setSingleUser] = useState([]);
  const [userID, setUserID] = useState([]);

  async function getUser() {
    const tokenData = Auth.getProfile();
    const userInfo = tokenData.data._id;
    setUserID(userInfo);
    const response = await fetch(`/api/users/${userID}`);
    const singleUser = await response.json();

    setSingleUser(singleUser)
  }
  useEffect(() => {
    getUser();
  });

  useEffect(() => {
    getProjects();
  }, []);

  function refreshPage(){
    window.location.reload();
} 

  return (
    <div className="projects-container">
    <div className="header">
    <button onClick={refreshPage}/>
    <p>Logged in as <br/>user<span id="userId">{singleUser._id}</span></p>
    </div>
    <div id="projects">
      <h3>{singleUser.username}'s projects</h3>
      <SingleProject allProjects={allProjects} userId={userId}/>
    </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import React from "react";

import SingleProject from "../SingleProject";

import Auth from "../../utils/auth";

export default function Dashboard() {
  const [allProjects, setAllProjects] = useState([]);
  const userProfile = Auth.getProfile();
  const userId = userProfile.data._id

  async function getProjects() {
    const response = await fetch(`/api/users/projects/${userId}`);
    const allProjects = await response.json();

    setAllProjects(allProjects.allProjects);
  };

  useEffect(() => {
    getProjects();
  }, [console.log(allProjects)]);



  return (
    <div className="container-fluid" id="dashboard">
      <h1>Dashboard</h1>
      <SingleProject allProjects={allProjects} userId={userId}/>
    </div>
  );
}

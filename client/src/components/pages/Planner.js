import React, { useState, useEffect } from "react";
import Auth from "../../utils/auth";
import "../../styles/planner.css";

async function projectForm() {

  // Get post title
  const projectTitle = document.getElementById('projectTitle').value;
  // Get post content
  const projectDescription = document.getElementById('projectDescription').value;
  // Get userId
  const userId = document.querySelector('#userId').textContent;
  // Make post to database so we can show it on the site
  if (projectTitle, projectDescription) {
    const response = await fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify({
        user: userId,
        title: projectTitle,
        description: projectDescription
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log('Post Posted');
    } else {
      alert(response.statusText);
    }
  }
  };
  
  export default function Planner({handlePageChange }) {
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

    function refreshPage(){
      window.location.reload();
  } 

    return (
      <div className="planner-container" id="planner">
        <div className="header">
        <button onClick={refreshPage}/>
        <p>Logged in as <br/>user<span id="userId">{singleUser._id}</span></p>
        </div>
        <div className="border">
        <h3>New Project</h3>
        <form>
              <label>Project Title:</label>
            <textarea id="projectTitle"/>
              <label>Project Description:</label>
            <textarea
              id="projectDescription"
              rows="3"
            ></textarea>
            <button onClick={() =>projectForm()} id="plannerSubmit" type="submit">Submit
            </button>
        </form>
      </div>
      </div>
    );
  }
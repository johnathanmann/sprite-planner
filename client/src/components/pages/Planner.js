import React from "react";

async function postForm() {

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
  
  export default function Planner() {
    return (
      <div className="container-fluid">
        <h1>New Project</h1>
        <form>
          <div className="form-group">
            <h3>
              <label htmlFor="code">Project Title:</label>
            </h3>
            <br />
            <textarea className="form-control" id="projectTitle" rows="1"></textarea>
          </div>
          <div className="form-group">
            <h3>
              <label>Project Description:</label>
            </h3>
            <br />
            <textarea
              className="form-control"
              id="projectDescription"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
  
            <button onClick={() =>projectForm()} className="btn" type="submit">
  
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
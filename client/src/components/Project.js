import React from "react";

async function deleteProject(project_Id) {
  console.log(project_Id)
  const click = true;
  // Make post to database so we can show it on the site
  if (click) {
    const response = await fetch(`/api/projects/${project_Id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log('Post Deleted');
    } else {
      alert(response.statusText);
    }
  }
  };

export default function Project({thisProject}) {
  const projectId = thisProject._id;
return (
        <div key={thisProject._id} className="project">
      <h3>
        {thisProject.title}
      </h3>
      <code>{thisProject.description}</code> <br />
      <button onClick={() => deleteProject(projectId)} >
      <span id="projectId">{thisProject._id}</span>
      </button>
      </div>
)
}
import React from "react";

export default function Project({thisProject}) {
return (
        <div key={thisProject._id} className="project">
      <h3>
        {thisProject.title}
      </h3>
      <code>{thisProject.description}</code> <br />
      </div>
)
}
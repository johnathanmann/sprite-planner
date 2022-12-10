import React from "react";

import Project from "./Project";

export default function SingleProject({
  allProjects
}) {


return(
  allProjects.map((project) => (
    <div key={project._id}>
      <Project thisProject={project}/>
      </div>
  ))
)
}

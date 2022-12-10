import React from "react";

import Auth from "../../utils/auth";

export default function Homepage({handlePageChange }){
    return(
        <div>
        {Auth.loggedIn() ? (
        <>
            <button onClick={() => handlePageChange("Planner")}>Create Project</button>
            <button onClick={() => handlePageChange("Projects")}>Projects</button>
        </>
          ) : (
          <>
            <h1>Homepage</h1>
            <button onClick={() => handlePageChange("Login")}>Login</button>
            <button onClick={() => handlePageChange("Signup")}>Sign Up</button>
        </>
          )}
        </div>
    )
}
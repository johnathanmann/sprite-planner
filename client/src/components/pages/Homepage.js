import React from "react";

import Auth from "../../utils/auth";

export default function Homepage({handlePageChange }){
    return(
        <div>
        {Auth.loggedIn() ? (
        <>
            <button onClick={() => handlePageChange("Planner")}>My Projects</button>
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
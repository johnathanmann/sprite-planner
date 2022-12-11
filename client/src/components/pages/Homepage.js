import React from "react";
import Auth from "../../utils/auth";
import "../../styles/menus.css";

export default function Homepage({handlePageChange }){
    return(
        <div>
        {Auth.loggedIn() ? (
          <div className="menu-container">
          <div className="button">
          <button onClick={() => handlePageChange("Planner")}>Create Project</button><br/>
          <button onClick={() => handlePageChange("Projects")}>Projects</button>
          </div>
      </div>
          ) : (
          <div className="menu-container">
            <div className="button">
            <button onClick={() => handlePageChange("Login")}>Authentication</button>
            </div>
        </div>
          )}
        </div>
    )
}
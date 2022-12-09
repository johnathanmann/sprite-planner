import React, { useState, useEffect } from "react";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Planner from "./pages/Planner";
import Project from "./pages/Project";

export default function Sprite() {
  const [currentPage, setCurrentPage] = useState("Homepage");

  const renderPage = () => {
    if (currentPage === "Homepage") {
      return <Homepage handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    if (currentPage === "Signup") {
      return <Signup />;
    }
    if (currentPage === "Planner") {
      return <Planner />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
  };

  useEffect(() => {
    document.title = "Sprite Planner";
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs/>
      {renderPage()}
    </div>
  );
}
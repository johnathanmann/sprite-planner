import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Planner from "./pages/Planner";
import Projects from "./pages/Projects";

export default function Sprite() {
  const [currentPage, setCurrentPage] = useState("Homepage");

  const renderPage = () => {
    if (currentPage === "Homepage") {
      return <Homepage handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    if (currentPage === "Planner") {
      return <Planner />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
  };

  useEffect(() => {
    document.title = "Sprite Planner";
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header/>
      {renderPage()}
    </div>
  );
}
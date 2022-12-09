import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";

export default function User() {
  const [singleUser, setSingleUser] = useState([]);
  const [userID, setUserID] = useState([]);

  async function getUser() {
    const tokenData = Auth.getProfile();
    const userInfo = tokenData.data._id;
    setUserID(userInfo);
    const response = await fetch(`/api/users/${userID}`);
    const singleUser = await response.json();

    setSingleUser(singleUser);
  }
  useEffect(() => {
    getUser();
  });

  return (
    <div className="container-fluid">
      <h1>Logged in as user<span id="userId">{singleUser._id}</span></h1>
    </div>
  );
}